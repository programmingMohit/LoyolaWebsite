import * as React from "react";
import { Satisfy, Ruda, Inter, Oswald } from "next/font/google";
import journalism from "../../Assets/journalism.webp";
import psychologyImg from "../../Assets/psychology.webp";
import Image from "next/image";
import Link from "next/link";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });
const bodyText = Inter({ subsets: ["latin"] });
const subheading = Oswald({ subsets: ["latin"] });

const BA = () => {
  return (
    <div
      className={`bg-cover bg-[url('~/public/backgrounds/bgFour.webp')] bg-bottom bg-fixed`}
    >
      <div className={`bg-yellow-100/90`}>
        <h1
          className={`flex justify-center text-center pt-10 text-black lg:text-6xl text-4xl ${satisfy.className}`}
        >
          Bachelor of Arts {"("}BA{")"}
        </h1>
        <div className={`grid lg:grid-cols-2 grid-cols-1 mx-3  gap-12`}>
          <Eligibility />
          <Image
            src={journalism}
            className="h-60 w-4/5 object-cover lg:mt-14 mt-4 rounded-2xl"
          />
          <Image
            src={psychologyImg}
            className="h-60 w-4/5 object-cover mt-5 rounded-2xl justify-self-end"
          />
          <Offerings />
        </div>
        <div id="buttons" className="flex justify-center gap-20 mt-14 pb-10">
          <BAFacultyBtn />
          <ApplyBtn />
        </div>
      </div>
    </div>
  );
};

const Eligibility = () => {
  return (
    <div
      id="eligibility"
      className={`bg-gradient-to-br from-amber-400 to-amber-500 text-black text-lg ml-16 mt-14 w-4/5 row-span-1 text-center rounded-2xl lg:h-60 py-5 px-14 justify-self-end`}
    >
      <h2
        className={`text-3xl underline underline-offset-8 ${subheading.className}`}
      >
        ELIGIBILITY
      </h2>
      <p className={`mt-8 ${bodyText.className}`}>
        A candidate for the BA degree course shall have passed the Pre –
        University examination with any combination of subjects, or equivalent
        in 12th standard examination of any other board.{" "}
      </p>
    </div>
  );
};

const Offerings = () => {
  return (
    <div
      id="offerings"
      className=" bg-gradient-to-tl from-amber-400 to-amber-500 text-black text-lg mr-16 mt-5 w-4/5 row-span-1 flex items-center flex-col rounded-2xl h-60 py-5 px-14 justify-self-start"
    >
      <h2
        className={`text-3xl underline underline-offset-8 ${subheading.className}`}
      >
        COURSES
      </h2>
      <ul className={`mt-8 pl-10 list-disc space-y-4 ${bodyText.className}`}>
        <li>BA Journalism, Psychology</li>
        <li>BA Journalism, Political Science</li>
      </ul>
    </div>
  );
};

const BAFacultyBtn = () => {
  return (
    <div id="faculty-btn">
      <Link href="/departments" className="relative inline-block text-lg group">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-purple-900 transition-colors duration-300 ease-out border-2 border-purple-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-purple-900 group-hover:-rotate-180 ease"></span>
          <span className="relative">Faculty</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-purple-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </Link>
    </div>
  );
};

const ApplyBtn = () => {
  return (
    <div id="apply-btn">
      <Link
        href="/admissions/index"
        className="relative inline-flex items-center justify-start py-3.5 pl-4 pr-12 overflow-hidden font-semibold text-purple-900 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
      >
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-purple-900 group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            className="w-5 h-5 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg
            className="w-5 h-5 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          Apply Now
        </span>
      </Link>
    </div>
  );
};
export default BA;
