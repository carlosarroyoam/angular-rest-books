import LoginForm from "@/components/login-form";

const Login = () => {
  return (
    <section className="mx-auto max-w-md">
      <h2 className="text-2xl font-medium leading-7 tracking-tight text-gray-900">
        Log in
      </h2>
      <p className="mt-2 text-sm leading-6">
        Enter your email and password to start managing your bookstore.
      </p>

      <LoginForm />
    </section>
  );
};

export default Login;
