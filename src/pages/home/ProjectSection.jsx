import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import ProjectCard from "../../components/ProjectCard";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/data/ProjectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section>
      <SectionHeader title={"Project"} />
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
