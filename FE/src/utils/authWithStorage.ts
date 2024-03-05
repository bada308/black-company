import LocalStorage from "./localStorage";

export const setAccessToken = (token: string) => {
  LocalStorage.removeItem("accessToken");
  LocalStorage.setItem("accessToken", token);
};

export const setTokenExpiration = (accessExpiredTime: number) => {
  LocalStorage.removeItem("tokenExpiration");
  const accessExpiredTimeDate = new Date().getTime() + accessExpiredTime;
  LocalStorage.setItem("tokenExpiration", accessExpiredTimeDate.toString());
};

export const removeAccessToken = () => {
  LocalStorage.removeItem("accessToken");
};

export const removeTokenExpiration = () => {
  LocalStorage.removeItem("tokenExpiration");
};

export const deleteTokenInfo = () => {
  removeAccessToken();
  removeTokenExpiration();
};
