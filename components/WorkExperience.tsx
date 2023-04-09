import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typing";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

function WorkExperience({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[500px] xl:w-[500px] snap-center bg-[#69a6d1] p-4 mt-40 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mb-20">
      <motion.img
        className="w-20 h-20 rounded-full xl:w-[60px] xl:h-[60px] object-cover"
        src={urlFor(experience?.companyImage).url()}
        alt="Work-logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience.company} </h4>
        <p className="font-medium text-xl mt-1">{experience.jobTitle}</p>

        <p className=" uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className=" list-disc space-y-4 ml-5 text-lg h-60 overflow-y-auto pr-5 ">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default WorkExperience;
