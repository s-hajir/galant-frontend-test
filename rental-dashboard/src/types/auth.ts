
/**
 * Interface for Search Request
 */
export interface SearchRequest {
  keyword?: string; // searched across multiple fields
  page?: number; // default: 0
  size?: number; // default: 20
  sortBy?: string; // default: "id"
  direction?: "ASC" | "DESC"; // default: "ASC"
}

/**
 * Error Types enum (matches Java ErrorType)
 */
export enum ErrorType {
  WRONG_USERNAME_OR_PASSWORD = "WRONG_USERNAME_OR_PASSWORD",
  EMAIL_ALREADY_IN_USE = "EMAIL_ALREADY_IN_USE",
  INVALID_INPUT = "INVALID_INPUT",
  NOT_FOUND = "NOT_FOUND",
  INVALID_TOKEN = "INVALID_TOKEN",
  UNAUTHORIZED = "UNAUTHORIZED",
  UNKNOWN_ERROR = "UNKNOWN_ERROR"
}

/**
 * Interface für Error
 */
export interface Error {
  message: ErrorType;
  details?: string;
}
/**
 * Interface for Token
 */
export interface Token {
  accessToken: string;
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

/**
 * JWT Payload structure decoded from token
 */
export interface JWTPayload {
  sub: string; // username (subject)
  role: string; // user role
  iat?: number; // issued at
  exp?: number; // expiration time
}

/**
 * Authenticated user info
 */
export interface AuthUser {
  username: string;
  role: string;
}

/**
 * Auth Context type
 */
export interface AuthContextType {
  token: string | null;
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (credentials: UserLoginRequest) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}
