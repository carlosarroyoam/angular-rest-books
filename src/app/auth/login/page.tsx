import LoginForm from "@/components/login-form";

export default async function LoginPage() {
  return (
    <section className="mx-auto max-w-md">
      <h2 className="text-2xl font-medium leading-7 tracking-tight text-zinc-900">
        Log in
      </h2>
      <p className="mt-2 text-sm leading-6">
        Enter your email and password to start managing your bookstore.
      </p>

      <LoginForm />
    </section>
  );
}
