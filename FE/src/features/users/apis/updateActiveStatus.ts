import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ActiveStatusInfoDto } from ".";
import API from "@/constants/API";
import MESSAGE from "@/constants/MESSAGE";
import { https } from "@/lib/axios";
import { ActiveStatus } from "@/types/member";

interface PutMyActiveStatusRequest {
  activeStatus: ActiveStatus;
}

export const putMyActiveStatus = async (
  body: PutMyActiveStatusRequest,
): Promise<ActiveStatusInfoDto> => {
  const { data } = await toast.promise(
    https({
      url: API.USER.ACTIVE_STATUS,
      method: "PUT",
      data: body,
    }),
    {
      pending: MESSAGE.EDIT.PENDING,
      success: MESSAGE.EDIT.SUCCESS,
      error: MESSAGE.EDIT.FAILED,
    },
  );
  return new ActiveStatusInfoDto(data?.data);
};

export const usePutMyActiveStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [API.USER.ACTIVE_STATUS],
    mutationFn: (activeStatus: ActiveStatus) =>
      putMyActiveStatus({ activeStatus }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [API.USER.ACTIVE_STATUS] });
    },
  });
};
