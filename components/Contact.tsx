import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="h-screen flex relative flex-col xl:flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-36 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 ">
        <h4 className="text-2xl font-semibold text-center">
          I have just got what you need <span> ,Let's Chat.</span>{" "}
        </h4>
      </div>

      <div className="mt-[-100px] space-y-5">
        <div className="flex  items-center space-x-5 justify-center">
          <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
          <p className="text-xl">+447375409987</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
          <p className="text-xl">Y.yusuf@outlook.com</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
          <p className="text-xl">London/Birmgingham, UK</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
