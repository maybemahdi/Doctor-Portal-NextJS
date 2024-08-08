"use client";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa6";

const page = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form?.name?.value;
    const email = form?.email?.value;
    const password = form?.password?.value;
    const info = { name, email, password };
    console.log(info);
  };
  return (
    <div
      style={{ minHeight: "calc(100vh - 115px)" }}
      className="flex flex-col items-center justify-center"
    >
      <div className="rounded shadow-md md:w-[30%] w-full mx-auto p-5">
        <h3 className="text-2xl text-center mb-5">Register</h3>
        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            className="w-full border p-3 rounded"
            placeholder="Enter Your Name"
            required
          />
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
            Register
          </button>
        </form>
        <p className="text-base my-3 text-center">
          Already have an Account?{" "}
          <span>
            <Link className="text-blue-500 cursor-pointer" href={"/login"}>
              Login Here
            </Link>
          </span>
        </p>
        <div className="flex items-center my-3">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button className="w-full text-gray-600 border hover:text-white hover:bg-gray-600 transition-all duration-300 border-gray-600 rounded p-2">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default page;
