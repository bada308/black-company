const storagePrefix = "eeos_";

const storage = {
  _isBrowser: typeof window !== "undefined",
  getToken: (): string => {
    if (storage._isBrowser) {
      return JSON.parse(
        localStorage.getItem(`${storagePrefix}token`) as string,
      );
    }
    return null;
  },
  setToken: (token: string) => {
    if (storage._isBrowser) {
      localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
    }
  },
  removeToken: () => {
    if (storage._isBrowser) {
      localStorage.removeItem(`${storagePrefix}token`);
    }
  },
  getTokenExpiration: (): string => {
    if (storage._isBrowser) {
      return JSON.parse(
        localStorage.getItem(`${storagePrefix}tokenExpiration`) as string,
      );
    }
    return null;
  },
  setTokenExpiration: (tokenExpiration: number) => {
    if (storage._isBrowser) {
      localStorage.setItem(
        `${storagePrefix}tokenExpiration`,
        JSON.stringify(tokenExpiration),
      );
    }
  },
  removeTokenExpiration: () => {
    if (storage._isBrowser) {
      localStorage.removeItem(`${storagePrefix}tokenExpiration`);
    }
  },
};

export default storage;
