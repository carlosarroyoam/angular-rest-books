"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { login } from "@/app/actions";

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
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="email"
          {...register("email")}
          className="mt-2 w-full rounded-md px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors?.email ? (
          <p className="mt-2 text-sm font-medium text-red-500">
            {errors.email?.message}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="password"
          {...register("password")}
          className="mt-2 w-full rounded-md px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors?.password ? (
          <p className="mt-2 text-sm font-medium text-red-500">
            {errors.password?.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-700 px-4 py-1.5 text-sm font-semibold text-white hover:bg-blue-700/80 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      >
        Log in
      </button>

      <div>
        {errors.root ? (
          <p className="mt-2 text-sm font-medium text-red-500">
            {errors.root?.message}
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default LoginForm;
