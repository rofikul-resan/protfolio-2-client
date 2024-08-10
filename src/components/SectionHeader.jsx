const SectionHeader = ({ title }) => {
  return (
    <div className="w-fit mx-auto">
      <h1 className="text-4xl text-center mx-3">{title}</h1>
      <div className="w-full h-1 bg-orange-600 mt-1 rounded-full"></div>
    </div>
  );
};

export default SectionHeader;
