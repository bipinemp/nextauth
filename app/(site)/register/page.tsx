"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/api/register", data)
      .then(() => toast.success("Registered Successfully"))
      .catch(() => toast.error("Something went wrong, Try again"));
  };

  return (
    <section className="m-10 w-96 mx-auto">
      <h1 className="font-bold text-xl mb-4 text-center">
        Register to your account
      </h1>
      <form onSubmit={registerUser} className="flex flex-col gap-3">
        <input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="text"
          name="email"
          placeholder="Email..."
          className="bg-transparent border border-white text-white p-2"
        />
        <input
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          type="text"
          name="name"
          placeholder="Name..."
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
          Sign In
        </button>
      </form>
    </section>
  );
}
