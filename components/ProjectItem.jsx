import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl, tech }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-3 group hover:bg-gradient-to-r from-sky-500 to-sky-400 over:scale-105 ease-in duration-200">
      <Image
        src={backgroundImg}
        alt="/"
        width="1663"
        height="917"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center font-semibold">{tech}</p>
        <Link href={projectUrl}>
          <a
            target="_blank"
            className="text-center py-3 rounded-lg bg-white text-gray-800 font-bold text-lg block"
          >
            More Info
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
