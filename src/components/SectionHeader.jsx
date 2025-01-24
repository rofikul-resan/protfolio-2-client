import { motion } from "framer-motion";
const SectionHeader = ({ title, headline, detail }) => {
  return (
    <motion.div
      className="my-20 space-y-3 "
      initial={{ opacity: 0, y: -200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, stiffness: 100, type: "spring" }}
    >
      <h3 className="text-xl uppercase">{title || ""}</h3>
      <h1 className="text-6xl text-success font-bold capitalize">
        {headline || ""}
      </h1>
      <p className=" w-1/2">{detail || ""}</p>
    </motion.div>
  );
};

export default SectionHeader;
