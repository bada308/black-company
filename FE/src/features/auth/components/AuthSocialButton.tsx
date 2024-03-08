"use client";

import classNames from "classnames";
import { getRedirectUrl } from "../utils/getRedirectUrl";
import Icon, { IconKey } from "@/components/common/Icon";

interface AuthSocialButtonProps {
  provider: "slack";
}

const providerMap: Record<
  string,
  {
    bgColor: string;
    icon: IconKey;
    textColor: string;
  }
> = {
  slack: {
    bgColor: "bg-slack",
    icon: "slackIcon",
    textColor: "text-white",
  },
};

const AuthSocialButton = ({ provider }: AuthSocialButtonProps) => {
  const { bgColor, icon, textColor } = providerMap[provider];
  const buttonStyle = classNames(
    "flex w-64 justify-center gap-4 rounded-3xl py-3",
    bgColor,
  );
  const textStyle = classNames("text-center font-medium", textColor);
  const redirectUrl = getRedirectUrl(provider);

  return (
    <a href={redirectUrl} className={buttonStyle}>
      <Icon icon={icon} />
      <p className={textStyle}>{provider.toUpperCase()}(으)로 로그인</p>
    </a>
  );
};

export default AuthSocialButton;
