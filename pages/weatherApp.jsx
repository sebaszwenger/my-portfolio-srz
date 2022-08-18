import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import project from "../public/assets/projects/Weather App.png";

const LaMilaGrosa = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={project}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Wheater App</h2>
          <h3>React JS / Tailwind </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="tracking-widest uppercase text-sky-500">Project</p>
          <h2 className="py-2">Overview</h2>
          <p>
            Weather App is a weather forecast viewer. This application was made
            for practice purposes and was made in React JS and Tailwind CSS.
            This allows you to search and view the weather forecast for up to
            three days in any city in the world. It also allows you to save and
            view the current weather in up to five different locations in a
            favorites bar.
          </p>
          <a
            href="https://github.com/sebaszwenger/pronostico-app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 ease-in duration-200 text-white">
              Code
            </button>
          </a>
          <a
            href="https://pronostico-app-delta.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-6 shadow-xl shadow-gray-400 rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 hover:scale-105 ease-in duration-200 text-white">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-6 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Weather API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Axios
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Query
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Router Dom
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Custom Hooks
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> useContext
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> LocalStorage
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default LaMilaGrosa;