import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { AuthContextType } from "@/types/auth";

/**
 * Custom hook to access authentication context
 * Must be used within AuthProvider
 *
 * @returns Auth context with user, token, and auth methods
 * @throws Error if used outside of AuthProvider
 */
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
