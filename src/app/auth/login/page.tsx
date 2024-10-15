import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <section className="mx-auto max-w-md">
      <h2 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
        Log in
      </h2>
      <p className="mt-2 text-sm leading-6">
        Log in with your account to start managing your system.
      </p>

      <LoginForm />
    </section>
  );
};

export default Login;
