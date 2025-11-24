

const API_BASE_URL = "import.meta.env.VITE_API_URL";

/**
 * Authenticate user with credentials
 * @param credentials User username and password
 * @returns JWT token from backend
 */
export async function login(credentials: string): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Login failed");
  }

  return response.json();
}

/**
 * Logout user (optional backend call)
 */
export async function logout(): Promise<void> {

  // Optional: Call backend logout endpoint if needed
  // const token = localStorage.getItem("jwt");
  // if (token) {
  //   await fetch(`${API_BASE_URL}/api/logout`, {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // }
}

/**
 * Get stored JWT token from localStorage
 */
export function getStoredToken(): string | null {
  return localStorage.getItem("jwt");
}

/**
 * Save JWT token to localStorage
 */
export function saveToken(token: string): void {
  localStorage.setItem("jwt", token);
}

/**
 * Remove JWT token from localStorage
 */
export function removeToken(): void {
  localStorage.removeItem("jwt");
}

/**
 * Decode JWT token and extract payload (without verification)
 * NOTE: This is CLIENT-SIDE decoding only for display purposes.
 * Always verify JWT on the backend before trusting claims.
 */
export function decodeToken(token: string) {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error("Invalid token format");
    }

    const decoded = JSON.parse(atob(parts[1]));
    return decoded;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
}

/**
 * Check if token is expired
 */
export function isTokenExpired(token: string): boolean {
  const decoded = decodeToken(token);
  if (!decoded || !decoded.exp) {
    return true;
  }

  const expirationTime = decoded.exp * 1000; // Convert to milliseconds
  return Date.now() >= expirationTime;
}
