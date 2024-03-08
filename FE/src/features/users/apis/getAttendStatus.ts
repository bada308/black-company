import { useQuery } from "@tanstack/react-query";
import { AttendStatusInfoDto } from ".";
import API from "@/constants/API";
import { https } from "@/lib/axios";

const getMyAttendStatus = async (
  programId: number,
): Promise<AttendStatusInfoDto> => {
  const { data } = await https({
    url: API.USER.ATTEND_STATUS(programId),
    method: "GET",
  });
  return new AttendStatusInfoDto(data?.data);
};

export const useGetMyAttendStatus = (programId: number) => {
  return useQuery({
    queryKey: [API.USER.ATTEND_STATUS(programId)],
    queryFn: () => getMyAttendStatus(programId),
  });
};
