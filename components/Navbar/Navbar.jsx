"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-8 h-8 cursor-pointer" />
          ) : (
            <Bars3Icon className="w-8 h-8 cursor-pointer" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {items.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="hover:text-gray-200 transition">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          دانالیگ
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 bg-blue-700 p-4 ">
          {items.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="block text-center py-2 hover:bg-blue-500 rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
