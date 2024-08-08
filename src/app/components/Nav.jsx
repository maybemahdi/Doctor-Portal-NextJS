"use client";

import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import React, { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // Get current pathname
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Appointment", path: "/appointment" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact Us", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="w-full bg-white shadow-md">
    <div className="flex justify-between items-center mx-auto w-[90%] py-4">
      <div>
        <Link href="/" className="font-bold text-xl">
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
                    ? "bg-gray-700 text-white px-4 py-2 rounded-md"
                    : "hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition-all duration-300"
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
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
    </div>
  </nav>
  );
};

export default Nav;
