"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ROUTES from "@/constants/ROUTES";
import storage from "@/utils/storage";

const AuthValidate = () => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = storage.getToken();
    const tokenExpiration = storage.getTokenExpiration();

    if (!accessToken || !tokenExpiration) {
      storage.removeToken();
      storage.removeTokenExpiration();
      router.push(ROUTES.LOGIN);
    }
  }, []);

  return <></>;
};
export default AuthValidate;
