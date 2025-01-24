import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Button } from "@nextui-org/react";
import { FaCode, FaGithub } from "react-icons/fa";
import { Tilt } from "react-tilt";

const ProjectCard = ({ project, index }) => {
  console.log(index);

  return (
    <motion.div
      variants={fadeIn("up", "tween", index * 0.1, 0.5)}
      whileInView="show"
    >
      <Tilt>
        <div>
          <div className="bg-cardBg h-full w-full rounded-3xl p-4 flex flex-col justify-center items-center">
            <div>
              <div className="w-fit h-72 mx-auto mb-4 rounded-2xl overflow-hidden relative">
                {/* github link  */}

                <div className="absolute top-2 right-2 p-2 bg-gray-900 rounded-full git-icon-button">
                  <div className="flex items-center space-x-2">
                    <span>
                      <FaGithub className="text-2xl" />
                    </span>
                    <div className="git-link space-x-2 hidden">
                      <Button
                        radius="full"
                        size="sm"
                        variant="ghost"
                        color="success"
                        className="border-[.5px]"
                        endContent={<FaCode />}
                      >
                        <a href={project?.github?.client}>client</a>
                      </Button>
                      <Button
                        radius="full"
                        size="sm"
                        variant="ghost"
                        color="success"
                        className="border-[.5px]"
                        endContent={<FaCode />}
                      >
                        <a href={project?.github?.server}>server</a>
                      </Button>
                    </div>
                  </div>
                </div>
                <img
                  src={project?.images[0] || ""}
                  alt="project image"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold ">{project?.name}</h2>
                <p className="text-sm text-success">
                  {project?.details}{" "}
                  <span className="text-primary-500 ">
                    {" "}
                    <button className="hover:underline">See more...</button>
                  </span>
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {project?.technology?.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className={`text-xs ${
                          index === 0
                            ? "text-primary-500"
                            : index === 1
                            ? "text-secondary-500"
                            : "text-success-500"
                        }`}
                      >
                        #{tech}
                      </span>
                    ))}
                    {project?.technology?.length > 3 && (
                      <span className="text-xs">...</span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="solid"
                    color="primary"
                    className="border-0"
                    endContent={<FaCode />}
                  >
                    <a href={project?.liveLink}>Live</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;

// project={
//   "name": "Project One",
//   "images": [
//       "/project1.png",
//       "/project1.png",
//       "/project1.png"
//   ],
//   "details": "This is a detailed description of Project One, highlighting its purpose, functionality, and overall structure.",
//   "features": [
//       "Responsive design with modern UI/UX.",
//       "Real-time data updates using WebSockets.",
//       "Authentication and authorization implemented."
//   ],
//   "technology": [
//       "React",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "Tailwind CSS"
//   ],
//   "github": {
//       "client": "#",
//       "server": "#"
//   },
//   "liveHost": "#",
//   "videoDemo": "#"
// }
