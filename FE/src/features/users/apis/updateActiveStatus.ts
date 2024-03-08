import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ActiveStatusInfoDto } from ".";
import API from "@/constants/API";
import MESSAGE from "@/constants/MESSAGE";
import { https } from "@/lib/axios";
import { ActiveStatus } from "@/types/member";

interface UpdateActiveStatusRequest {
  activeStatus: ActiveStatus;
}

export const updateActiveStatus = async (
  body: UpdateActiveStatusRequest,
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

export const useUpdateActiveStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [API.USER.ACTIVE_STATUS],
    mutationFn: (activeStatus: ActiveStatus) =>
      updateActiveStatus({ activeStatus }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [API.USER.ACTIVE_STATUS] });
    },
  });
};
