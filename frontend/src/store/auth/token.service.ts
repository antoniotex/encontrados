export const TOKEN_KEY = "@Encontrados-User-Token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const login = (token: any) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};