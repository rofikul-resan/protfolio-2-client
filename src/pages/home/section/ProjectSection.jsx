import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader";
import ProjectCard from "../../../components/card/ProjectCard";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/data/ProjectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section className="w-11/12 mx-auto">
      <SectionHeader
        title={"My work"}
        headline={"Projects."}
        detail={
          "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
