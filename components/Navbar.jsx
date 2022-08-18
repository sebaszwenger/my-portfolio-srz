import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import logo from "../public/assets/logo-web-sky.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("bg-[#ecf0f3]");
  const [linkColor, setLinkColor] = useState("text-[#1f2937]");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/laMilaGrosa" ||
      router.asPath === "/mercadoLibreApp" ||
      router.asPath === "/weatherApp" ||
      router.asPath === "/cotizadorCripto"
    ) {
      setNavBg("transparent");
      setLinkColor("text-[#ecf0f3]");
    } else {
      setNavBg("bg-[#ecf0f3]");
      setLinkColor("text-[#1f2937]");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={`fixed w-full h-20 z-[900] ${navBg} ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-[85%] mx-auto flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <a className="pt-1">
            <Image
              layout="fixed"
              width="90"
              height="65"
              src={logo}
              alt="logo"
              className="cursor-pointer hover:rotate-6 hover:scale-105 duration-200 ease-in"
            />
          </a>
        </Link>

        <div>
          <ul
            className={`hidden md:flex md:justify-between uppercase ${linkColor}`}
          >
            <Link href="/#home">
              <li className="ml-10 hover:bg-sky-500 hover:rounded-md py-1 px-2 ease-in duration-200 hover:text-white">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 hover:bg-sky-500 hover:rounded-md py-1 px-2 ease-in duration-200 hover:text-white">
                Abaut
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 hover:bg-sky-500 hover:rounded-md py-1 px-2 ease-in duration-200 hover:text-white">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 hover:bg-sky-500 hover:rounded-md py-1 px-2 ease-in duration-200 hover:text-white">
                projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 hover:bg-sky-500 hover:rounded-md py-1 px-2 ease-in duration-200 hover:text-white">
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
                className="rounded-full bg-sky-500 shadow-md shadow-gray-800 p-3 cursor-pointer "
              >
                <AiOutlineClose className="hover:rotate-180 ease-in duration-300 text-gray-700" />
              </div>
            </div>
            <div className="my-6">
              <p className="w-[85%] md:w-[90%] py-4 text-center text-sky-600">
                Let´s build something legendary together
              </p>
            </div>
          </div>

          <div className="pl-4 mt-16 flex flex-col">
            <ul className="uppercase ">
              <Link href="/#home">
                <li
                  onClick={handleNav}
                  className="mb-8 text-sm hover:bg-sky-500 hover:rounded-md hover:text-white ease-in-out duration-200 w-fit py-1 px-2"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={handleNav}
                  className="mb-8 text-sm hover:bg-sky-500 hover:rounded-md hover:text-white ease-in-out duration-200 w-fit py-1 px-2"
                >
                  Abaut
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={handleNav}
                  className="mb-8 text-sm hover:bg-sky-500 hover:rounded-md hover:text-white ease-in-out duration-200 w-fit py-1 px-2"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={handleNav}
                  className="mb-8 text-sm hover:bg-sky-500 hover:rounded-md hover:text-white ease-in-out duration-200 w-fit py-1 px-2"
                >
                  projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={handleNav}
                  className="mb-8 text-sm hover:bg-sky-500 hover:rounded-md hover:text-white ease-in-out duration-200 w-fit py-1 px-2"
                >
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-28">
              <p className="uppercase mb-2 tracking-widest text-sky-500">
                Let´s connect
              </p>
              <div className="flex items-center justify-between w-full py-4 sm:w-[80%]">
                <div className="rounded-full bg-white hover:bg-blue-500 hover:text-white shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-200">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full bg-white hover:bg-gray-700 hover:text-white shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-200">
                  <FaGithub />
                </div>
                <div className="rounded-full bg-white hover:bg-red-500 hover:text-white shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-200">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full bg-white hover:bg-sky-500 hover:text-white shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-200">
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
