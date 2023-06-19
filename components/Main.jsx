"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill, BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

const Main = ({darkMode}) => {

  return (
    <div id="home" className="w-full h-screen text-center dark:bg-gray-900">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]"> Jeff</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full-Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a full-stack web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I'm focused on building responsive front-end web applications while
            simultaneously learning back-end technologies
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/jeffhwang9" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/JeffyWongo" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:jeffhwang9@gmail.com" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
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
