const SectionHeader = ({ title, headline, detail }) => {
  return (
    <div className="ml-10 mb-10">
      <h3 className="text-xl capitalize">{title || ""}</h3>
      <h1 className="text-4xl text-success font-bold">{headline || ""}</h1>
      <p className=" w-1/2">{detail || ""}</p>
    </div>
  );
};

export default SectionHeader;
