import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

import { SessionData, sessionOptions } from "@/lib/sessions";
import { NextRequest } from "next/server";

export interface ApiError {
  message: string;
  error: string;
  status: number;
  path: string;
  timestamp: string;
}

export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  return Response.json(session);
}

export async function POST(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  const { email = "No email", password = "No password" } =
    (await request.json()) as {
      email: string;
      password: string;
    };

  const response = await fetch(`${process.env.API_URL}/auth`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return Response.json(session);
  }

  const user = {
    id: data.id,
    name: data.name,
    username: data.username,
    email: data.email,
    role_id: data.role_id,
    access_token: data.access_token,
  };

  // You can pass any information you want
  session.isAuth = true;
  session.id = user.id;
  session.name = user.name;
  session.username = user.username;
  session.email = user.email;
  session.role_id = user.role_id;
  session.access_token = user.access_token;

  await session.save();
  return Response.json(session);
}

export async function DELETE() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  session.destroy();
  return Response.json(session);
}
