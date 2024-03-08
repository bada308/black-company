import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { TokenDto } from ".";
import API from "@/constants/API";
import ERROR_CODE from "@/constants/ERROR_CODE";
import ROUTES from "@/constants/ROUTES";
import { https } from "@/lib/axios";
import storage from "@/utils/storage";

interface SlackLoginRequest {
  code: string;
  redirect_uri: string;
}

export class SlackLoginDto extends TokenDto {}

export const slackLogin = async ({
  code,
  redirect_uri,
}: SlackLoginRequest): Promise<SlackLoginDto> => {
  const { data } = await https({
    url: API.AUTH.SLACK_LOGIN,
    method: "POST",
    params: { code, redirect_uri },
  });

  return new SlackLoginDto(data?.data);
};

export const useSlackLogin = () => {
  const router = useRouter();
  useMutation({
    mutationFn: slackLogin,
  });

  return useMutation(
    [API.AUTH.SLACK_LOGIN],
    async (request: SlackLoginRequest) => {
      return await slackLogin(request);
    },
    {
      onSuccess: (data) => {
        const { accessToken, accessExpiredTime } = data;
        storage.setToken(accessToken);
        storage.setTokenExpiration(accessExpiredTime);

        router.replace(ROUTES.MAIN);
      },
      onError: (error: any) => {
        const errorCode = error?.response?.data?.code;
        errorCode === ERROR_CODE.AUTH.INVALID_NAME &&
          router.replace(ROUTES.NAME_ERROR);
      },
    },
  );
};
