import Image from "next/image";
import React from "react";
import itinerary from "../../public/assets/projects/itinerary.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={itinerary}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">RateMyItinerary</h2>
          <h3>HTML / CSS / Javascript / Express.js / MongoDB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="">Project</p>
          <h2 className="py-4">Introduction</h2>
          <p className="mb-12">
            Our objective was to develop a distinctive platform that diverges
            from mainstream platforms like Reddit, while simultaneously serving
            a practical purpose. Many users when planning their vacations were
            utilizing Google Docs as their coordination tool. This got us
            thinking about whether there might be a better alternative out
            there, beyond the limitations of Google Docs.
          </p>
          <h2>Functionality</h2>
          <p className="py-4 mb-12">
            Our application serves as a vibrant forum, housing a collection of
            travel guides made by locals. Users can access these
            guides for free and rate them, improving community engagement
            and promoting travel experiences. By incorporating activities like
            hiking, shopping, festivals, and dining options, we allow
            comprehensive itineraries to be made that are tailored to individual preferences.
            Furthermore, users can employ the search feature to locate specific
            destinations, streamlining their travel planning process. To enhance
            the dining experience, we aspired to leverage the Mastercard
            location API, providing valuable information on restaurants
            accepting Mastercard payments. We employed a combination of HTML, CSS, and
            JavaScript for the frontend, while utilizing Express.JS as our
            backend framework. Storing the application's data was made possible
            through the implementation of MongoDB.
          </p>

          <h2>Reflections</h2>
          <p className="py-4 mb-5">
            Our team encountered various challenges throughout the development
            process. It's worth mentioning that all three team members were
            relatively new to web development, making this Hackathon a
            significant learning experience. Ron and I, in particular,
            were introduced to HTML, CSS, and JavaScript for the first time
            during this event. We take pride in our team's ability to maintain focus and
            collaboration over two consecutive days, dedicating a total of 12
            hours each day to the project. Despite
            the limited time available and our demanding school schedules, we
            managed to develop a functional website which was an
            exciting accomplishment. Throughout the development process, our team gained valuable
            insights and expanded our skill sets. For me, participating in
            my first hackathon provided an immersive introduction to web
            development, where I acquired a comprehensive understanding of
            HTML, CSS, JavaScript, and the intricacies of frontend-backend
            interactions. Moving forward, we have ambitious plans to enhance the user
            experience of creating itineraries, incorporating widgets and
            drag-and-drop features for activities. Additionally, we aim to
            integrate APIs such as Google's or Yelp's to offer a comprehensive
            list of restaurants with ratings. Lastly, we strive to complete the
            implementation of Mastercard functionality, further augmenting the
            application's capabilities.
          </p>
          <p className="py-4 mb-5">Thank you to our team: Jeffrey Hwang, Chaney Chantipaporn and Ron Rivera</p>

          <a
            href="https://github.com/JeffyWongo/WashU-Hack2022"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://devpost.com/software/ratemyitinerary"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">DevPost</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
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

export default property;
