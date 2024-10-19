import { getSession } from "@/app/actions";

const UserHeader = async () => {
  const session = await getSession();

  return (
    <div>
      <h2 className="text-2xl font-medium leading-7 tracking-tight text-zinc-900">
        Welcome {session.name}
      </h2>
    </div>
  );
};

export default UserHeader;
