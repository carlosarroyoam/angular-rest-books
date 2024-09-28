import { getSession } from "@/app/actions";

const UserHeader = async () => {
  const session = await getSession();

  return (
    <div>
      <h2 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
        Welcome {session.name}
      </h2>
      <p className="mt-2 leading-6 text-gray-600">Manage your system.</p>
    </div>
  );
};

export default UserHeader;
