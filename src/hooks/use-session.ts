import useSWR from "swr";

import useSWRMutation from "swr/mutation";

import { defaultSession, SessionData } from "@/lib/sessions";

const sessionApiRoute = "/api/session";

async function fetchJson<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const respose = await fetch(input, {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    ...init,
  });

  return respose.json();
}

function doLogin(
  url: string,
  { arg }: { arg: { email: string; password: string } },
) {
  return fetchJson<SessionData>(url, {
    method: "POST",
    body: JSON.stringify({ email: arg.email, password: arg.password }),
  });
}

function doLogout(url: string) {
  return fetchJson<SessionData>(url, {
    method: "DELETE",
  });
}

export default function useSession() {
  const { data: session, isLoading } = useSWR(
    sessionApiRoute,
    fetchJson<SessionData>,
    {
      fallbackData: defaultSession,
    },
  );

  const { trigger: login } = useSWRMutation(sessionApiRoute, doLogin, {
    // the login route already provides the updated information, no need to revalidate
    revalidate: false,
  });
  const { trigger: logout } = useSWRMutation(sessionApiRoute, doLogout);

  return { session, login, logout, isLoading };
}
