import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-4 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] py-4">
            About
          </p>
          <h2 classname="py-4 text-gray-700 dark:text-gray-200">Who I Am</h2>

          <p className="py-4 text-gray-600 dark:text-gray-400 text-lg">
            I am a recent graduate at the University of California,
            Riverside, with a Bachelor's Degree in Data Science. I
            was born and raised in Orange, California, where I grew up with
            interests such as gaming and building computers.
          </p>
          <p className="py-4 text-gray-600 dark:text-gray-400 text-lg">
            When I'm not clacking away on my keyboard, I enjoy doing any of the
            following:
          </p>
          <ul className="flex justify-around items-start">
            <div>
              <li className="text-gray-600 dark:text-gray-400 text-lg">&#x2022; Pickleball</li>
              <li className="text-gray-600 dark:text-gray-400 text-lg">&#x2022; Building mechanical keyboards</li>
              <li className="text-gray-600 dark:text-gray-400 text-lg">&#x2022; Gaming</li>
              <li className="text-gray-600 dark:text-gray-400 text-lg">&#x2022; Watching NBA Basketball</li>
              <li className="text-gray-600 dark:text-gray-400 text-lg">&#x2022; Exploring new songs</li>
            </div>
            <div>
              <li className="text-gray-600 dark:text-gray-400 text-lg">&#x2022; Tennis</li>
              <li className="text-gray-600 dark:text-gray-400 text-lg">&#x2022; Cooking</li>
              <li className="text-gray-600 dark:text-gray-400 text-lg">&#x2022; Learning new skills</li>
              <li className="text-gray-600 dark:text-gray-400 text-lg">&#x2022; Building computers</li>
              <li className="text-gray-600 dark:text-gray-400 text-lg">&#x2022; Searching for new dining spots</li>
            </div>
          </ul>
          <Link href="/#projects">
            <p className="py-4 text-gray-900 underline cursor-pointer dark:text-gray-300 text-lg">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>

        <div className="dark:shadow-md dark:border dark:border-gray-400 min-w-[480px] col-span-2 h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
          <img src="/cover2.png" className="h-80 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
