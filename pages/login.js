import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(username, password);
    const res = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await res.json();

    if (data.status === "ok") {
      router.push("/");
    }
    setUsername("");
    setPassword("");
  };
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-[#0C0C0C] py-32">
      <div className="flex flex-col justify-center w-full max-w-lg space-y-8 items-left">
        <h1 className="text-[#E5202B] font-bold text-5xl">
          Sign in to Dev<span className="text-white">box</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start justify-start space-y-12">
            <input
              className="w-full px-5 py-3 text-gray-200 bg-gray-800 rounded-sm outline-none text-md"
              type="text"
              placeholder="Enter username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="w-full px-5 py-3 text-gray-200 bg-gray-800 rounded-sm outline-none text-md"
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn">Log In</button>
          </div>
        </form>
      </div>

      <div
        className="absolute px-3 py-2 bg-white rounded-md cursor-pointer top-5 left-5"
        onClick={() => router.push("/")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#E5202B] text-xl"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
    </div>
  );
};

export default Login;
