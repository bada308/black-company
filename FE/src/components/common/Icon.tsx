import BlackLogo from "/public/black_logo.svg";
import LoginHero from "/public/saly.svg";
import SlackIcon from "/public/icons/slack.svg";
import { ComponentProps } from "react";

export type IconKey = keyof typeof icons;
interface IconProps extends ComponentProps<"img"> {
  className?: string;
  icon: IconKey;
}

const icons = {
  blackLogo: {
    image: BlackLogo,
    alt: "EEOS 검정 로고",
  },
  loginHero: {
    image: LoginHero,
    alt: "로그인 화면 이미지",
  },
  slackIcon: {
    image: SlackIcon,
    alt: "슬랙 아이콘",
  },
} as const;

const Icon = ({ className, icon, ...props }: IconProps) => {
  const { image, alt } = icons[icon];
  return <img src={image.src} alt={alt} {...props} className={className} />;
};

export default Icon;
