import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg";

const Abaut = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-sky-600">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I have always been fascinated by technology and working with
            computers. In the year 2000 I graduated as a programmer but for
            personal issues I was never by able to continue this career.
          </p>
          <p className="py-2 text-gray-600">
            I have spent the last 8 years providing technical service on
            equipment of computation.
          </p>
          <p className="py-2 text-gray-600">
            In 2021 I started this wonderful web development adventure, starting
            by learning HTML, CSS and JavasCript.
          </p>
          <p className="py-2 text-gray-600">
            With the course of the different projects, the love for programming
            revived in me and this fascination leads me day by day to learn new
            technologies.
          </p>
          <p className="py-2 text-gray-600">
            Now I spend my time building projects with React and Next JS and
            Soon I will continue with Node js.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            width="1920"
            height="1280"
            className="rounded-xl"
            alt="Foto de Fotis Fotopoulos en Unsplash"
            size="50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Abaut;
