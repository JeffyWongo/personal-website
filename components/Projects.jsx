import React from "react";
import iti from "../public/assets/projects/itinerary.png";
import ProjectItem from "./ProjectItem";
import aerosol from "../public/assets/projects/aerosol3.png"
import organicdb from "../public/assets/projects/organicdb.png"
import income from "../public/assets/projects/income.png"
import marketing from "../public/assets/projects/marketing.png"

const Projects = () => {
  return ( 
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">

        <ProjectItem
          title="Marketing Analysis"
          backgroundImg={marketing}
          projectUrl="/marketing"
          tech='Microsoft SQL Server, Python, pandas, PowerBI'
        />
        <ProjectItem
          title="Adult Income Prediction Model"
          backgroundImg={income}
          projectUrl="/income"
          tech='Python, pandas, NumPy, tensorflow, scikit-learn'
        />
        <ProjectItem
          title="Aerosol Concentration Predictor"
          backgroundImg={aerosol}
          projectUrl="/aerosol"
          tech='Python, pandas, NumPy, Matplotlib, scikit-learn, seaborn'
        />
        <ProjectItem
          title="RateMyItinerary"
          backgroundImg={iti}
          projectUrl="/itinerary"
          tech='HTML, CSS, JavaScript, Express, MongoDB'
        />
        <ProjectItem
          title="OrganicDB"
          backgroundImg={organicdb}
          projectUrl="/organicDB"
          tech="C++, Googletest, Valgrind, rapidJSON"
        />
        </div>
      </div>
    </div>
  );
};

export default Projects;
