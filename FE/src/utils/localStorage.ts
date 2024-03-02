class LocalStorage {
  constructor() {}

  static setItem(key: string, value: any) {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  static getItem(key: string) {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
    return null;
  }

  static removeItem(key: string) {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  }
}

export default LocalStorage;
