import Link from "next/link";

import { getSession, logout } from "@/app/actions";

const Header = async () => {
  const session = await getSession();

  if (!session.isAuth) return null;

  return (
    <header className="bg-gray-100 py-4">
      <div className="container flex items-center justify-between">
        <Link
          href="/dashboard"
          className="text-xl font-semibold tracking-tight text-gray-900"
        >
          Bookstore
        </Link>

        <form action={logout}>
          <button
            type="submit"
            className="rounded-md bg-gray-300 px-4 py-1.5 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          >
            Log out
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
