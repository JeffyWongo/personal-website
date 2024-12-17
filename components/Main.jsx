"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill, BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

const Main = ({darkMode}) => {

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 dark:text-gray-200">
            Hi, I'm <span className="text-[#5651e5]"> Jeff Hwang</span>
          </h1>
          {/* <h3 className="py-2 text-gray-700 dark:text-gray-200">An Aspiring Data Engineer</h3> */}
          <p className="py-4 text-gray-600 max-w-[70%] m-auto dark:text-gray-400">
            I'm an aspiring Data Engineer who is passionate about anything related to data. Currently,
            I'm working on improving my skills in PowerBI.
          </p>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto dark:text-gray-400">Want to collab or have a chat? Let's get in touch!</p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/jeffhwang9" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:border">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/JeffyWongo" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:border">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:jeffhwang9@gmail.com" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:border">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
