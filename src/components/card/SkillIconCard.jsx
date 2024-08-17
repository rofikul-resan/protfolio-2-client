const SkillIconCard = ({ skill }) => {
  return (
    <div>
      <div className={`relative h-28 w-28 my-4 pt-2`}>
        <div
          className={`h-28 w-28 border-cyan-200 border-1  absolute bg-sky-200 z-0 rounded-md  rotate-45  `}
        ></div>
        <div className="mt-2">
          <img
            src={skill.icon}
            alt={skill.icon}
            className="h-14 w-14 mx-auto relative z-10"
          />
          <div className="relative z-10 ">
            <p className="text-center font-semibold text-gray-900">
              {skill.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillIconCard;
