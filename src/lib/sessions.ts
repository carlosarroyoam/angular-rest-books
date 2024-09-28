import { SessionOptions } from "iron-session";

export interface SessionData {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  role_id?: number;
  access_token?: string;
  refresh_token?: string;
  isAuth: boolean;
}

export const defaultSession: SessionData = {
  isAuth: false,
};

export const sessionOptions: SessionOptions = {
  // You need to create a secret key at least 32 characters long.
  password: process.env.SESSION_SECRET!,
  cookieName: "bookstore-session",
  ttl: 3600,
  cookieOptions: {
    httpOnly: true,
    // Secure only works in `https` environments. So if the environment is `https`, it'll return true.
    secure: process.env.NODE_ENV === "production",
  },
};
