import React from "react";
import { motion } from "framer-motion";

https: type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src="https://media.licdn.com/dms/image/D4E03AQHD_9Ym9KUt_Q/profile-displayphoto-shrink_400_400/0/1675499890291?e=1684972800&v=beta&t=fLsAkEQH_qommCvyUxw9_FH9Guy1tT-I_i0gzj7rpr4"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-65 xl:w-[300px] xl:h-[400px] "
      />

      <div className=" space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a] ">little </span>{" "}
          background
        </h4>
        <p className="text-base">
          Welcome to my portfolio website! My name is Yahya Yusuf, and I have
          had an interesting career journey so far. I started out as a
          construction project manager, delivering projects worth over 150
          million. While I enjoyed the challenges of project management, I felt
          drawn towards UX design as it was closer to my interests. However,
          after gaining experience in UX, I realized that my true passion lies
          in coding and building products from the ground up. So, I decided to
          transition into front-end development, and it has been an exciting
          journey so far. With my background in project management and UX
          design, I bring a unique perspective to my work as a front-end
          developer. I have a deep understanding of user needs and am committed
          to building intuitive and engaging interfaces that deliver exceptional
          user experiences. I have also gained experience in full-stack
          development, which allows me to create seamless experiences from
          end-to-end.
        </p>
      </div>
    </motion.div>
  );
}
