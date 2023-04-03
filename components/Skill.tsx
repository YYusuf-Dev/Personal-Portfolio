import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://img.freepik.com/free-icon/html-5_318-183412.jpg?size=338&ext=jpg"
        alt="skill"
        className=" rounded-full border border-gray-700 object-cover w-30 h-30 md:w-28 md:h-28 xl:w-35 xl:h-35 filter group-hover:grayscale transition-duration-300 ease-in-out "
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-30 w-30 md:w-28 md:h-28 xl:w-35 xl:h-35 rounded-full  z-0 ">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
