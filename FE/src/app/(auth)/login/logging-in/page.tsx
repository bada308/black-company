"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useSlackLogin } from "@/features/auth";

const LoginSlackCallbackPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const { mutate: loginSlack } = useSlackLogin();

  useEffect(() => {
    if (code) {
      loginSlack({
        code,
        redirect_uri: process.env.NEXT_PUBLIC_SLACK_REDIRECT_URI,
      });
    }
  }, [code]);

  return <LoadingSpinner />;
};
export default LoginSlackCallbackPage;
