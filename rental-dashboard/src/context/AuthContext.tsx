import { createContext, ReactNode, useState, useEffect, useCallback } from "react";
import { AuthContextType, AuthUser, JWTPayload, UserLoginRequest } from "@/types/auth";
import {
  login as apiLogin,
  logout as apiLogout,
  getStoredToken,
  saveToken,
  removeToken,
  decodeToken,
  isTokenExpired,
} from "@/api/authAPI";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * AuthProvider component that wraps the entire app
 * Manages authentication state, token storage, and user info
 */
export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize auth state from localStorage on app load
  useEffect(() => {
    const initializeAuth = () => {
      

      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  /**
   * Login user with credentials
   */
  const login = useCallback(async (credentials: UserLoginRequest) => {

  }, []);

  /**
   * Logout user
   */
  const logout = useCallback(async () => {
    await apiLogout();
    removeToken();
    setToken(null);
    setUser(null);
    setError(null);
  }, []);

  const value: AuthContextType = {
    token,
    user,
    isAuthenticated: token !== null && !isTokenExpired(token || ""),
    login,
    logout,
    isLoading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
