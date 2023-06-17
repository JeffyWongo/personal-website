import React from "react";
import Image from "next/image";
import CustomSkill from './CustomSkill';

const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <CustomSkill
            title='HTML'
          />
          <CustomSkill
            title='CSS'
          />  
          <CustomSkill
            title='Javascript'
          />
          <CustomSkill
            title='React'
          />
          <CustomSkill
            title='Next'
          />
          <CustomSkill 
            title='Tailwind'
          />
          <CustomSkill
            title='Node'
          />
          <CustomSkill
            title='C++'
          />
          <CustomSkill
            title='Python'
          />
          <CustomSkill
            title='MongoDB'
          />
          <CustomSkill
            title='R'
          /> 
          <CustomSkill
            title='Github'
          /> 
          
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
