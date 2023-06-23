"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill} from "react-icons/bs";
import ThemeButton from "./ThemeButton";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-16 z-50 shadow-xl transition-all duration-300 dark:border-gray-700"
          : "fixed w-full h-28 z-50 transition-all duration-300 dark:border-gray-700"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <div
            className={
              shadow
                ? "ml-4 text-2xl font-semibold hover:border-b transition-all duration-300 text-gray-700 dark:text-gray-200"
                : "ml-4 text-3xl font-semibold hover:border-b transition-all duration-300 text-gray-700 dark:text-gray-200"
            }
            alt="name"
          >
            JEFF HWANG
          </div>
        </Link>
        <div>
          <ul className="hidden md:flex justify-center items-center">
            {mounted && <ThemeButton className='mx-5' />}
            <Link href="/#about">
              <li className="mx-5 text-sm uppercase hover:border-b ml-10">About</li>
            </Link>
            <Link href="/#skills">
              <li className="mx-5 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="mx-5 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="mx-5 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <li className="mx-5 text-sm uppercase hover:border-b">Resume</li>
            </Link>
          </ul>
          <div className="md:hidden flex">
          {mounted && <ThemeButton />}
          
          <div onClick={handleNav} className="md:hidden cursor-pointer flex justify-center items-center px-5">
            <AiOutlineMenu size={25} />
          </div>
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 " : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 dark:bg-gray-900 dark:text-gray-100"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="">
            <div className="flex w-full items-center justify-between">
              <Link href="/" className="font-bold text-2xl">
                JEFF HWANG
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-sm dark:border dark:border-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href="https://www.linkedin.com/in/jeffhwang9"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:border dark:border-gray-400">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href="https://github.com/JeffyWongo" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:border dark:border-gray-400">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="mailto:jeffhwang9@gmail.com" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:border dark:border-gray-400">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume.pdf" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:border dark:border-gray-400">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
