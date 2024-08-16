import { Button } from "@nextui-org/react";
import { FaCode } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";
import { motion } from "framer-motion";

const ProjectCard = ({ card, index }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className={`card ${
        index % 2 === 0 ? "" : "ml-auto"
      } w-9/12 text-sky-400 mt-8 bg-transparent  `}
    >
      <div className=" flex p-6  ">
        <div className={`h-72 overflow-hidden rounded-md `}>
          <img src={card?.images[0]} alt={card?.name} className="w-[900px]" />
        </div>
        <div className=" p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">{card?.name}</h1>
            <p>{card?.details}</p>
          </div>
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
    </motion.div>
  );
};

export default ProjectCard;
