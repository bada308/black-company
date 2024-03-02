"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ROUTES from "@/constants/ROUTES";
import { deleteTokenInfo } from "@/utils/authWithStorage";
import LocalStorage from "@/utils/localStorage";

const AuthValidate = () => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = LocalStorage.getItem("accessToken");
    const tokenExpiration = LocalStorage.getItem("tokenExpiration");

    if (!accessToken || !tokenExpiration) {
      deleteTokenInfo();
      router.push(ROUTES.LOGIN);
    }
  }, []);

  return <></>;
};
export default AuthValidate;
