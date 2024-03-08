import AuthSocialButton from "./AuthSocialButton";

const AuthSocialButtonGroup = () => {
  return (
    <div className="flex flex-col space-y-2">
      <AuthSocialButton provider="slack" />
    </div>
  );
};

export default AuthSocialButtonGroup;
