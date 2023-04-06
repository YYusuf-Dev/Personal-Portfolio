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
        src="https://w7.pngwing.com/pngs/462/261/png-transparent-responsive-web-design-bootstrap-sass-cascading-style-sheets-html-framework-purple-template-web-design-thumbnail.png"
        alt="skill"
        className="  object-cover w-30 h-30 md:w-28 md:h-28 xl:w-35 xl:h-35 filter group-hover:grayscale transition-duration-300 ease-in-out "
      />

      <div className="absolute item-center opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-30 w-30 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full  z-0 ">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
