import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className="dark:border dark:border-gray-400 dark:shadow-sm relative flex flex-column items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gray-700">
      <Image
        className="rounded-xl group-hover:opacity-10 ease-in-out duration-300 h-full w-full flex-1 object-cover"
        src={backgroundImg}
        alt="/"
      />
      <div className="group opacity-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:transition-opacity group-hover:duration-300 group-hover:opacity-100 ">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">
          {tech}
        </p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;