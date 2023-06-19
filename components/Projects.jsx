import React from "react";
import iti from "../public/assets/projects/itinerary.png";
import ProjectItem from "./ProjectItem";
import itinerary from "@/app/itinerary/page";

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid grid-cols-2 gap-8">

        <ProjectItem
          title="RateMyItinerary"
          backgroundImg={iti}
        />
        <ProjectItem
          title="RateMyItinerary"
          backgroundImg={iti}
        />
        </div>
      </div>
    </div>
  );
};

export default Projects;
