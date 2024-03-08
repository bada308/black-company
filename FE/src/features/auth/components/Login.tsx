import AuthSocialButtonGroup from "./AuthSocialButtonGroup";
import Icon from "@/components/common/Icon";
import Title from "@/components/common/Title";

const LeftSection = () => {
  return (
    <div className="hidden flex-col gap-28 bg-secondary-10 p-8 sm:flex">
      <div className="flex flex-col">
        <Icon icon="blackLogo" width={81} height={36} />
        <p className="text-xs font-light">에코노베이션 행사 관리 시스템</p>
      </div>
      <Icon icon="loginHero" width={400} />
    </div>
  );
};

const RightSection = () => {
  return (
    <div
      id="right"
      className="flex flex-col items-center justify-center gap-24"
    >
      <Title text={"로그인"} />
      <AuthSocialButtonGroup />
    </div>
  );
};

const Login = () => {
  return (
    <div className="grid h-[80vh] sm:h-[44rem] sm:grid-cols-[25rem_1fr] sm:shadow-lg">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Login;
