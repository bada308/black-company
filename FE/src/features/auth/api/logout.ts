import storage from "@/utils/storage";

export const logout = async () => {
  storage.removeToken();
  storage.removeTokenExpiration();
};
