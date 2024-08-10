"use client";

import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Swal from "sweetalert2";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const session = useSession();
  console.log(session);
  const pathname = usePathname(); // Get current pathname
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Appointment", path: "/appointment" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign Out!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await signOut({ redirect: false });
        Swal.fire({
          title: "Success!",
          text: "Sign Out Successful",
          icon: "success",
        });
      }
    });
  };

  return (
    <nav className="w-full md:py-4 py-2 bg-white shadow-md">
      <div className="flex justify-between items-center mx-auto w-[90%] py-4">
        <div>
          <Link href="/" className="font-bold text-xl text-secondary">
            Doctors Portal
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-3 items-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={
                    pathname === link.path
                      ? "bg-secondary text-base text-white px-4 py-2 rounded-md"
                      : "hover:bg-secondary text-sm hover:text-white px-4 py-2 rounded transition-all duration-300"
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {!session?.data ? (
              <li>
                <Link
                  href={"/login"}
                  className={
                    pathname === "/login"
                      ? "bg-secondary text-sm text-white px-4 py-2 rounded-md"
                      : "hover:bg-secondary text-sm hover:text-white px-4 py-2 rounded transition-all duration-300"
                  }
                >
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleSignOut}
                  className={`px-4 py-2 rounded-md
                    hover:bg-secondary text-sm hover:text-white transition-all duration-300`}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <div className="hidden lg:block">
          {session?.data?.user ? (
            <p className="font-bold">
              Logged in as{" "}
              <span className="text-rose-500">{session?.data?.user?.name}</span>
            </p>
          ) : (
            <p className="font-bold">Not Logged In</p>
          )}
        </div>
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {!open ? <FaBarsStaggered size={20} /> : <RxCross2 size={25} />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col gap-4 items-start px-[20px] py-2 bg-white border-t border-gray-200">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={
                  pathname === link.path
                    ? "text-gray-700"
                    : "hover:text-gray-700 transition-all duration-300"
                }
                onClick={() => setOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-[20px] py-2">
          {session?.data?.user ? (
            <p className="font-bold text-secondary">
              Logged in as{" "}
              <span className="text-rose-500">{session?.data?.user?.name}</span>
            </p>
          ) : (
            <p className="font-bold text-secondary">Not Logged In</p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
