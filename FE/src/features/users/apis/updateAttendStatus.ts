import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AttendStatusInfoDto } from ".";
import API from "@/constants/API";
import MESSAGE from "@/constants/MESSAGE";
import { https } from "@/lib/axios";
import { AttendStatus } from "@/types/member";

export interface UpdateAttendStatusRequest {
  beforeAttendStatus: AttendStatus;
  afterAttendStatus: AttendStatus;
}

export const updateAttendStatus = async (
  programId: number,
  body: UpdateAttendStatusRequest,
): Promise<AttendStatusInfoDto> => {
  const { data } = await toast.promise(
    https({
      url: API.USER.ATTEND_STATUS(programId),
      method: "PUT",
      data: body,
    }),
    {
      pending: MESSAGE.EDIT.PENDING,
      success: MESSAGE.EDIT.SUCCESS,
      error: MESSAGE.EDIT.FAILED,
    },
  );
  return new AttendStatusInfoDto(data?.data);
};

export const useUpdateAttendStatus = (programId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [API.USER.ATTEND_STATUS],
    mutationFn: ({
      beforeAttendStatus,
      afterAttendStatus,
    }: UpdateAttendStatusRequest) =>
      updateAttendStatus(programId, {
        beforeAttendStatus: beforeAttendStatus,
        afterAttendStatus: afterAttendStatus,
      }),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [API.USER.ATTEND_STATUS(programId)],
      });
      const statuses: AttendStatus[] = [
        "attend",
        "late",
        "absent",
        "nonResponse",
      ];
      statuses.forEach((status) => {
        queryClient.invalidateQueries({
          queryKey: [API.MEMBER.ATTEND_STATUS(programId), status],
        });
      });
    },
  });
};
