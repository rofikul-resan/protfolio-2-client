const SkillIconCard = ({ skill, size }) => {
  return (
    <div>
      <div
        className={`relative my-4 pt-2`}
        style={{ height: size + "px", width: `${size}px` }}
      >
        <div
          className={`h-full w-full border-cyan-200 border-1  absolute bg-sky-200 z-0 rounded-md  rotate-45  `}
        ></div>
        <div className="mt-2">
          <img
            src={skill.icon}
            alt={skill.icon}
            className="h-1/2 w-1/2 mx-auto relative z-10"
          />
          <div className="relative z-10 ">
            <p
              className="text-center font-semibold text-gray-900 "
              style={{ fontSize: `${size / 8}px` }}
            >
              {skill.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillIconCard;
