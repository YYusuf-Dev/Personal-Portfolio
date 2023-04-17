import { urlFor } from "@/sanity";
import { PageInfo } from "@/typing";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My name is ${pageInfo?.name}`,
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
        src={urlFor(pageInfo.heroImage).url()}
        alt="profile pic"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7abba" />
        </h1>
        <div className="pt-5 ">
          <Link href="#about">
            <button className="heroButton p-5  text-gray-400">About</button>
          </Link>
          <Link href="#experiance">
            <button className="heroButton p-5  text-gray-400">
              Experiance
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton p-5  text-gray-400">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton p-5  text-gray-400">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
