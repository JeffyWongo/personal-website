import Image from "next/image";
import React from "react";
import organicdb from "../../public/assets/projects/organicdb.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const organicPage = () => {
  return (
    <div className="w-full mb-48">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={organicdb}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">OrganicDB</h2>
          <h3>C++, Googletest, rapidJSON</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="">Project</p>
          <h2 className="py-4">Introduction</h2>
          <p className="mb-12">
            Our goal was to develop a document data store from the ground up.
            Our primary objective was to create a robust system capable of
            managing and processing large volumes of data for developers to
            utilize (similar to MongoDB).
          </p>
          <h2>Functionalities</h2>
          <p className="py-4 mb-12">
            First, users are prompted to our User Account menu, choosing whether
            to Login, Register, or Reset your password. Once successfully logged
            in, developers can do CRUD operations on their collection. By
            implementing these operations, we provided developers with the
            ability to interact with the data store effectively, such as being
            able to read in user's predefined JSON files or choosing to
            dynamically create/edit/delete it within the program. Additionally, we focused
            on incorporating advanced filtering and querying capabilities,
            enabling developers to retrieve specific information based on their
            requirements.
          </p>

          <h2>Tools</h2>
          <p className="py-4 mb-5">
            Using the GoogleTest framework, we were able to ensure the accuracy
            and reliability of our code through unit testing. We designed and
            executed a series of tests to verify the functionality of our code.
            To handle JSON data manipulation in C++, we leveraged the rapidJSON
            library in order to efficiently parse and generate JSON data within
            our document data store. This allowed for seamless integration with
            other systems and simplified the interaction between our data store
            and external components.
          </p>

          <a
            href="https://github.com/JeffyWongo/cs180-23-organic-programming"
            target="_blank"
            rel="noreferrer"
            className="mr-8"
          >
            <button className="px-8 py-2 mt-4 dark:shadow-sm dark:border dark:border-gray-400">
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 h-[20vh] shadow-xl shadow-gray-400 rounded-xl py-4 dark:shadow-sm dark:border dark:border-gray-400">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> C++
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Googletest
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> rapidJSON
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default organicPage;
