import Image from "next/image";
import Link from "next/link";
import contactImg from "../public/assets/contactimage.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-sky-500">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}

          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-3 h-full">
              <div className="hover:scale-105 ease-in duration-200">
                <Image
                  className="rounded-xl "
                  src={contactImg}
                  alt="Foto de Lilly Rum en Unsplash"
                />
              </div>
              <div>
                <h2 className="py-2">Sebastian Zwenger</h2>
                <p>Front-end Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/sebastian-zwenger"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full bg-white hover:bg-blue-500 hover:text-white shadow-md shadow-gray-800 p-6 cursor-pointer flex hover:scale-110 ease-in duration-200">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/sebaszwenger"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full bg-white hover:bg-gray-700 hover:text-white shadow-md shadow-gray-800 p-6 cursor-pointer flex hover:scale-110 ease-in duration-200">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full bg-white hover:bg-red-500 hover:text-white shadow-md shadow-gray-800 p-6 cursor-pointer flex hover:scale-110 ease-in duration-200">
                    <AiOutlineMail />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/clint-briley-50056920a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full bg-white hover:bg-sky-500 hover:text-white  shadow-md shadow-gray-800 p-6 cursor-pointer flex hover:scale-110 ease-in duration-200">
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
              // action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
              // method="POST"
              // enctype="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 bg-gradient-to-r from-sky-500 to-sky-400 rounded-xl">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-sky-500" size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
