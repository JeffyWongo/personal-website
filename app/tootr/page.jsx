import Image from "next/image";
import React from "react";
import tootr from "../../public/assets/projects/tootr.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const tootrPage = () => {
  return (
    <div className="w-full mb-48">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={tootr}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Tootr</h2>
          <h3>Next.js / Typescript / Firebase / Prisma</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="">Project</p>
          <h2 className="py-4">Introduction</h2>
          <p className="mb-12">
            People have to ask around family and friends to refer them to a good
            teacher/coach/tutor for activities such as academics, sports, or
            music. You likely have to take the word of the family friend when
            hiring their recommendation, but you might be missing out on a more
            optimal teacher. In addition there are families who recently moved
            to a new area and do not know anyone locally. These families may
            also have a language barrier, so finding a tutor to suit these needs
            would be beneficial. The web app mainly aims to do two things:
            <p>1. Help customers find teachers in their local area.</p>
            <p>2. Help advertise client services.</p>
          </p>
          <h2>Functionality</h2>
          <p className="py-4 mb-12">
            Customers visiting our platform can easily create an account and log
            in. Once logged in, they can browse and search for services, either
            by specific categories such as ACT/SAT, Piano, or Tennis, or by
            selecting a desired location within a radius. They can view ratings
            of service providers, message them, and maintain conversations.
            Conveniently, customers can also make payments to service providers
            through our app if a service fee is applicable. Service providers
            can create an account, log in, and manage their service profile.
            They have the ability to update and edit their information,
            communicate with customers via messaging, and maintain ongoing
            conversations. If a subscription fee is chosen, clients can pay us
            directly. While we don't perform background checks, we offer
            guidance on how to perform them effectively and can connect clients
            with trusted third-party providers if desired.
          </p>

          <h2>Tech Stack</h2>
          <p className="py-4 mb-5">
            In our tech stack, we leverage several powerful tools and
            frameworks. At the forefront is React, a widely acclaimed frontend
            library known for its versatility and popularity. With a large
            community for support, React has become a go-to choice, especially
            considering its extensive usage in building large-scale
            applications. MongoDB serves as our database, providing essential
            support for user authentication. Additionally, we utilize Prisma, a
            Node.js and Typescript ORM, which offers seamless communication with
            the database through an intuitive data model. With automated
            migrations, type-safety, and auto-completion, Prisma streamlines our
            development process. Node.js, an asynchronous event-driven
            JavaScript runtime, enables us to build scalable network
            applications. It creates a browser-like environment outside of the
            browser, allowing us to run JavaScript code efficiently. Finally, we
            embrace Next.js, a flexible React framework designed to build fast
            web applications. Leveraging server-side rendering, Next.js
            significantly contributes to Search Engine Optimization (SEO) and
            offers a comprehensive set of building blocks for our development
            needs.
          </p>

          <a
            href="https://github.com/JeffyWongo/tutor-app"
            target="_blank"
            rel="noreferrer"
            className="mr-8"
          >
            <button className="px-8 py-2 mt-4 dark:shadow-sm dark:border dark:border-gray-400">
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 h-[30vh] shadow-xl shadow-gray-400 rounded-xl py-4 dark:shadow-sm dark:border dark:border-gray-400">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> Express.js
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-white">
                <RiRadioButtonFill className="pr-1" /> MongoDB
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

export default tootrPage;
