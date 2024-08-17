import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import ProjectCard from "../../components/card/ProjectCard";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/data/ProjectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section className="w-11/12 mx-auto">
      <SectionHeader title={"Project"} />
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} card={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
