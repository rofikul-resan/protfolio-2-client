const SkillIconCard = ({ skill }) => {
  return (
    <div>
      <div className={`relative h-28 w-28 my-4 pt-2`}>
        <div
          className={`h-28 w-28 border-cyan-200 border-1  absolute bg-sky-200 shadow-md z-0 rounded-md shadow-orange-600/50 rotate-45  `}
        ></div>
        <div className="mt-2">
          <img
            src={skill.icon}
            alt={skill.icon}
            className="h-20 w-20 mx-auto relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillIconCard;
