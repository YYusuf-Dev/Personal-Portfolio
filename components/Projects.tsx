import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md-flex-row max-w-full justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <h4 className="absolute top-36 uppercase tracking-[3px] text-gray-600 text-sm">
        scroll to the right for more projects{" "}
      </h4>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((projects, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-28 md:p-44 h-screen ">
            <img
              src="https://img.freepik.com/premium-psd/full-screen-smartphone-laptop-mockup-design_136295-391.jpg?w=1060"
              alt="projects-pictures"
              className="h-50 w-60"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-4xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#69a6d1]">
                  Case study {i + 1} of {projects}:{" "}
                </span>
                ups clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                consectetur optio earum libero officia sint. Totam molestiae,
                consequuntur quam, omnis necessitatibus rerum, fuga quae iusto
                libero dolorem a architecto ab!
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
