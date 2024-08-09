"use client";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Page = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form?.email?.value;
    const password = form?.password?.value;
    const info = { email, password };
    console.log(info);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: path ? path : "/",
    });
    console.log(res);
    if (res?.status === 401) {
      return toast.error("Wrong Credentials");
    }
    if (res?.status === 200) {
      form.reset();
      toast.success("Login Successful");
      router.push("/");
    }
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
        <p className="text-base my-3 text-center">
          New to Doctor Portal?{" "}
          <span>
            <Link className="text-blue-500 cursor-pointer" href={"/register"}>
              Create an Account
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

export default Page;
