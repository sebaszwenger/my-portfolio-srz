import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[900] top-0 shadow-lg bg-white">
      <div className="max-w-[85%] mx-auto flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <a className="pt-1">
            <Image
              layout="fixed"
              width="90"
              height="65"
              src="/assets/logo-web.png"
              alt="logo"
              className="cursor-pointer hover:rotate-6 hover:scale-105 duration-200 ease-in"
            />
          </a>
        </Link>

        <div>
          <ul className="hidden md:flex md:justify-between uppercase">
            <Link href="/">
              <li className=" hover:border-b hover:border-sky-400 ml-10">
                Home
              </li>
            </Link>
            <Link href="/producto">
              <li className=" hover:border-b hover:border-sky-400 ml-10">
                Abaut
              </li>
            </Link>
            <Link href="/menu">
              <li className=" hover:border-b hover:border-sky-400 ml-10">
                Skills
              </li>
            </Link>
            <Link href="/nosotros">
              <li className=" hover:border-b hover:border-sky-400 ml-10">
                projects
              </li>
            </Link>
            <Link href="/locales">
              <li className=" hover:border-b hover:border-sky-400 ml-10">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white px-8 pt-2 ease-in duration-300"
              : "fixed left-[-100%] top-0 px-8 pt-2 ease-in duration-500 border-b-2"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between pb-2 border-b border-gray-300">
              <Image
                src="/assets/logo-web.png"
                width="100"
                height="65"
                alt="logo"
              />
              <div
                onClick={handleNav}
                className="rounded-full bg-sky-500 shadow-md shadow-gray-800 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-6">
              <p className="w-[85%] md:w-[90%] py-4 text-center text-sky-600">
                Let´s build something legendary together
              </p>
            </div>
          </div>

          <div className="pl-4 mt-16 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="mb-8 text-sm">Home</li>
              </Link>
              <Link href="/menu">
                <li className="mb-8 text-sm">Abaut</li>
              </Link>
              <Link href="/">
                <li className="mb-8 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="mb-8 text-sm">projects</li>
              </Link>
              <Link href="/">
                <li className="mb-8 text-sm">Contact</li>
              </Link>
            </ul>

            <div className="pt-28">
              <p className="uppercase mb-2 tracking-widest text-sky-500">
                Let´s connect
              </p>
              <div className="flex items-center justify-between w-full py-4 sm:w-[80%]">
                <div className="rounded-full bg-white hover:bg-sky-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-200">
                  <FaFacebook />
                </div>
                <div className="rounded-full bg-white hover:bg-sky-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-200">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full bg-white hover:bg-sky-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-200">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full bg-white hover:bg-sky-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-200">
                  <FaGithub />
                </div>
                <div className="rounded-full bg-white hover:bg-sky-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-200">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
