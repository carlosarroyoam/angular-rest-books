"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { LoginSchemaType } from "@/components/LoginForm";
import { defaultSession, SessionData, sessionOptions } from "@/lib/sessions";

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isAuth) {
    session.isAuth = defaultSession.isAuth;
  }

  return session;
}

export async function login(form: LoginSchemaType) {
  const session = await getSession();

  const response = await fetch(`${process.env.API_URL}/auth`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: form.email,
      password: form.password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { error: data.message };
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
  redirect("/dashboard");
}

export async function logout() {
  const session = await getSession();
  session.destroy();
  redirect("/auth/login");
}
