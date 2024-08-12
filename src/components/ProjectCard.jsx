import { Button } from "@nextui-org/react";
import { FaCode } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";

const ProjectCard = ({ card, index }) => {
  return (
    <div
      className={`card ${
        index % 2 === 0 ? "" : "ml-auto"
      } w-9/12 text-sky-400 mt-8 bg-transparent`}
    >
      <div className=" flex p-6  ">
        <div className="h-72  overflow-hidden rounded-md">
          <img src={card?.images[0]} alt={card?.name} className="w-[900px]" />
        </div>
        <div className="space-y-4 p-8 flex flex-col h-full">
          <h1 className="text-3xl font-semibold">{card?.name}</h1>
          <p>{card?.details}</p>
          <div className="flex gap-4 justify-end mt-auto">
            <Button
              variant="ghost"
              size="sm"
              color="primary"
              endContent={<FaCode />}
            >
              Source code
            </Button>
            <Button
              variant="ghost"
              size="sm"
              color="success"
              endContent={<VscLiveShare />}
            >
              Live Link
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

// card data prototype
// {
//     "name": "Project One",
//     "images": [
//         "/project1.png",
//         "/project1.png",
//         "/project1.png"
//     ],
//     "details": "This is a detailed description of Project One, highlighting its purpose, functionality, and overall structure.",
//     "features": [
//         "Responsive design with modern UI/UX.",
//         "Real-time data updates using WebSockets.",
//         "Authentication and authorization implemented."
//     ],
//     "technology": [
//         "React",
//         "Node.js",
//         "Express",
//         "MongoDB",
//         "Tailwind CSS"
//     ],
//     "github": {
//         "client": "#",
//         "server": "#"
//     },
//     "liveHost": "#",
//     "videoDemo": "#"
// }
