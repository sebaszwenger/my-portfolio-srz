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
            / / I am not your average developer
          </p>
          <p className="py-2 text-gray-600">
            Siempre he tenido fascinacion por la tecnologia y el trabajo con
            computadoras. En el año 2000 me recibí de programador pero por
            cuestiones personales nunca pude ejercer de dicha profecion.
          </p>
          <p className="py-2 text-gray-600">
            He pasado los últimos 7 años ofreciendo servicio tecnico en equipos
            de computo.
          </p>
          <p className="py-2 text-gray-600">
            En 2021 me inicie en esta maravillosa aventura del desarrollo web,
            empezando por aprender HTML, CSS y JavasCript, y en el transcurso de
            los distintos proyectos revivio en mi, el amor por la programación.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            // layout="responsive"
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
