const SectionHeader = ({ title, headline, detail }) => {
  return (
    <div className="my-20 space-y-6">
      <h3 className="text-xl uppercase">{title || ""}</h3>
      <h1 className="text-6xl text-success font-bold capitalize">
        {headline || ""}
      </h1>
      <p className=" w-1/2">{detail || ""}</p>
    </div>
  );
};

export default SectionHeader;
