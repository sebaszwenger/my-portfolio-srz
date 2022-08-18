import project1 from "../public/assets/projects/LaMilaGrosa.png";
import project2 from "../public/assets/projects/Weather App.png";
import project3 from "../public/assets/projects/MercadoLibre-app.png";
import project4 from "../public/assets/projects/cotizador-cripto.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-sky-500">
          Projects
        </p>
        <h2 className="py-4">What i&apos;ve Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="La Mila Grosa"
            backgroundImg={project1}
            projectUrl="/laMilaGrosa"
            tech="Next JS"
          />
          <ProjectItem
            title="Weather App"
            backgroundImg={project2}
            projectUrl="/weatherApp"
            tech="React JS"
          />
          <ProjectItem
            title="Cotizador Cripto"
            backgroundImg={project4}
            projectUrl="/cotizadorCripto"
            tech="React JS"
          />
          <ProjectItem
            title="MercadoLibre App"
            backgroundImg={project3}
            projectUrl="/mercadoLibreApp"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
