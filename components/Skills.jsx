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
            title='Python'
            picture='python'
          />
          <CustomSkill
            title='Tableau'
            picture='tableau2'
          />
          <CustomSkill
            title='SQL'
            picture='sql'
          />
          <CustomSkill
            title='Excel'
            picture='excel'
          />
          <CustomSkill
            title='R'
            picture='r3'
          />
          <CustomSkill
            title='C++'
            picture='c++2'
          />
          <CustomSkill
            title='Java'
            picture='java3'
          />
          <CustomSkill
            title='HTML'
            picture='html'
          />
          <CustomSkill
            title='CSS'
            picture='css'
          />  
          <CustomSkill
            title='Javascript'
            picture='javascript'
          />
          <CustomSkill
            title='Github'
            picture='github'
          /> 
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
