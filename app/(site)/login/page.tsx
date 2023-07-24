"use client";

import React, { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const session = useSession();
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/dashboard");
    }
  });

  const LoginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
      }
      if (callback?.ok && !callback?.error) {
        toast.success("Logged In Successfully");
      }
    });
  };

  return (
    <section className="m-10 w-96 mx-auto">
      <h1 className="font-bold text-xl mb-4 text-center">
        Login in to your account
      </h1>
      <form onSubmit={LoginUser} className="flex flex-col gap-3">
        <input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="text"
          name="email"
          placeholder="Email..."
          className="bg-transparent border border-white text-white p-2"
        />

        <input
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          type="password"
          name="password"
          placeholder="Password..."
          className="bg-transparent border border-white text-white p-2"
        />
        <button type="submit" className="p-2 bg-blue-500">
          LogIn
        </button>
      </form>
      <div className="flex flex-col">
        <button
          onClick={() => signIn("github")}
          className="mt-3 bg-indigo-600 py-2 w-full"
        >
          Sign In using Github
        </button>
        <button
          onClick={() => signIn("google")}
          className="mt-3 bg-green-600 py-2 w-full"
        >
          Sign In using Google
        </button>
      </div>
    </section>
  );
}
