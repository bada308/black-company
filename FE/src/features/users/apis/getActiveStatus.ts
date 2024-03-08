import { useQuery } from "@tanstack/react-query";
import { ActiveStatusInfoDto } from ".";
import API from "@/constants/API";
import { https } from "@/lib/axios";

const getActiveStatus = async (): Promise<ActiveStatusInfoDto> => {
  const { data } = await https({
    url: API.USER.ACTIVE_STATUS,
    method: "GET",
  });
  return new ActiveStatusInfoDto(data?.data);
};

export const useGetActiveStatus = () => {
  return useQuery({
    queryKey: [API.USER.ACTIVE_STATUS],
    queryFn: getActiveStatus,
    suspense: true,
  });
};
