import React from "react";
import { motion } from "framer-motion";
import WorkExperience from "./WorkExperience";
import { Experience } from "@/typing";

type Props = {
  experiences: Experience[];
};

function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20 mb-20">
        {experiences?.map((experience) => (
          <WorkExperience key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
