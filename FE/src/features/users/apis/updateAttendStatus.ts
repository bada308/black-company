import { toast } from "react-toastify";
import { AttendStatusInfoDto } from ".";
import API from "@/constants/API";
import MESSAGE from "@/constants/MESSAGE";
import { https } from "@/lib/axios";
import { AttendStatus } from "@/types/member";

export interface PutMyAttendStatusRequest {
  beforeAttendStatus: AttendStatus;
  afterAttendStatus: AttendStatus;
}

export const putMyAttendStatus = async (
  programId: number,
  body: PutMyAttendStatusRequest,
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
