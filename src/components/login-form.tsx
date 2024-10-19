"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { login } from "@/app/actions";
import { Button } from "@/components/ui/button";

const LoginSchema = z.object({
  email: z.string().min(3).max(128),
  password: z.string().min(3).max(32),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginSchemaType>({
    defaultValues: {
      email: "carroyom@mail.com",
      password: "secret",
    },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    const response = await login(data);

    if (response?.error) {
      setError("root", { message: response.error });
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-zinc-900"
        >
          Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="email"
          autoComplete="email"
          {...register("email")}
          className="mt-2 w-full rounded-md border-zinc-200 text-sm text-zinc-900 shadow-sm"
        />
        {errors?.email ? (
          <p className="mt-2 text-sm text-red-500">{errors.email?.message}</p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-zinc-900"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="password"
          {...register("password")}
          className="mt-2 w-full rounded-md border-zinc-200 text-sm text-zinc-900 shadow-sm"
        />
        {errors?.password ? (
          <p className="mt-2 text-sm text-red-500">
            {errors.password?.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" className="w-full">
        Log in
      </Button>

      <div>
        {errors.root ? (
          <p className="mt-2 text-sm text-red-500">{errors.root?.message}</p>
        ) : null}
      </div>
    </form>
  );
};

export default LoginForm;
