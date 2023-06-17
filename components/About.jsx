import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-4 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] py-4">
            About
          </p>
          <h2 classname="py-4">Who I Am</h2>

          <p className="py-4 text-gray-600">
            I am currently a third-year student at the University of California,
            Riverside, working towards a Bachelor's Degree in Data Science. I
            was born and raised in Orange, California, where I grew up with interests such as
            gaming, particularly Maplestory and League of Legends. In addition
            to spending time online with friends, you might also find me watching a
            NBA basketball game, curating my playlist with new songs, or
            in search of a new dining spot.
          </p>
          <Link href="/#projects">
          <p className="py-4 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
          </Link>
        </div>

        <div className="col-span-2 h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
          <img src="/cover.jpg" className="h-80 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
