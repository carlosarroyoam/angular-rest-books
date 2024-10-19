import Link from "next/link";

import { getSession, logout } from "@/app/actions";
import { Button } from "@/components/ui/button";

const Header = async () => {
  const session = await getSession();

  if (!session.isAuth) return null;

  return (
    <header className="bg-zinc-100 py-4">
      <div className="container flex items-center justify-between">
        <Link
          href="/dashboard"
          className="text-xl font-semibold tracking-tight text-zinc-900"
        >
          Bookstore
        </Link>

        <form action={logout}>
          <Button type="submit" variant={"secondary"}>
            Log out
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
