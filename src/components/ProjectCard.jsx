import { Button } from "@nextui-org/react";

const ProjectCard = ({ card }) => {
  return (
    <div className="card-warper">
      <div className="card flex">
        <img src={card.image[0]} alt={card.name} />
        <div className="space-y-4 p-8">
          <h1 className="text-3xl font-semibold">{card.name}</h1>
          <p>{card.details}</p>
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
