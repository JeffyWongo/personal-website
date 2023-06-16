import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p>About</p>
          <h2>Who I Am</h2>
          <p>// I am not your normal developer</p>
          <p>
            I am currently a third year student at University of California
            Riverside pursuing a Bachelor's Degree in Data Science. I was born
            and raised in Orange, California where I grew up with interests in
            games such as Maplestory, League of Legends, and Valorant. While you
            can find me online with friends, I also enjoy watching NBA
            basketball, listening to music, and always searching for new places
            to eat.
          </p>
          <p>Check out some of my latest projects.</p>
        </div>
        <div>
            <Image className='border-radius: rounded-lg'
              src="/../public/cover.jpg"
              alt="Your Image"
              width={300}
              height={300}
            />
        </div>
      </div>
    </div>
  );
};

export default About;
