"use client"
import React from "react";


const page = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form?.email?.value;
    const password = form?.password?.value;
    const info = { email, password };
    console.log(info);
  };
  return (
    <div
      style={{ minHeight: "calc(100vh - 115px)" }}
      className="flex flex-col items-center justify-center"
    >
      <div className="rounded shadow-md md:w-[30%] w-full mx-auto p-5">
        <h3 className="text-2xl text-center mb-5">Login</h3>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            className="w-full border p-3 rounded"
            placeholder="Enter Your Email"
            required
          />
          <input
            type="password"
            name="password"
            className="w-full border p-3 rounded"
            placeholder="Enter Your Password"
            required
          />
          <p className="text-[10px] ml-1 cursor-pointer">Forget Password?</p>
          <button className="w-full bg-gray-700 rounded text-white p-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
