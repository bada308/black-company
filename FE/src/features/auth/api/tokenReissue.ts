import { TokenDto } from ".";
import API from "@/constants/API";
import { https } from "@/lib/axios";

export class TokenReissueDto extends TokenDto {}

export const tokenReissue = async (): Promise<TokenReissueDto> => {
  const { data } = await https({
    url: API.AUTH.TOKEN_REISSUE,
    method: "POST",
  });
  return new TokenReissueDto(data?.data);
};
