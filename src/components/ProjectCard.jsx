import { Button } from "@nextui-org/react";

const ProjectCard = ({ card, index }) => {
  return (
    <div
      className={`card-warper ${
        index % 2 === 0 ? "" : "ml-auto"
      } w-9/12 border-2 text-sky-400`}
    >
      <div className="card flex ">
        <div className="h-72 w-64 overflow-hidden rounded-md">
          <img src={card?.images[0]} alt={card?.name} className="w-full" />
        </div>
        <div className="space-y-4 p-8">
          <h1 className="text-3xl font-semibold">{card?.name}</h1>
          <p>{card?.details}</p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" color="primary">
              code
            </Button>
            <Button variant="ghost" size="sm" color="success">
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
