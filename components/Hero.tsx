import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Yahya ",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover "
        src="https://media.licdn.com/dms/image/D4E03AQHD_9Ym9KUt_Q/profile-displayphoto-shrink_400_400/0/1675499890291?e=1684972800&v=beta&t=fLsAkEQH_qommCvyUxw9_FH9Guy1tT-I_i0gzj7rpr4"
        alt="profile pic"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7abba" />
        </h1>
        <div className="pt-5 p-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experiance">
            <button className="heroButton">Experiance</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
