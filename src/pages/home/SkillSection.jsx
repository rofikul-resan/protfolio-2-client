import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import SkillIconCard from "../../components/SkillIconCard";
import { useEffect } from "react";

const SkillSection = () => {
  const [allSkillsIconList, setAllSkillsIconList] = useState([]);
  const [allSkills, setAllSkills] = useState([]);
  const [isRowOdd, setIsRowOdd] = useState(false);

  useEffect(() => {
    fetch("/data/skillIcon.json")
      .then((res) => res.json())
      .then((data) => setAllSkills(data));
  }, []);

  return (
    <section>
      <div>
        <SectionHeader title={"My Skills"} />
        <div className="flex flex-col md:flex-row flex-wrap gap-12 w-10/12 mx-auto justify-self-end">
          {allSkills.map((skill, i) => (
            <SkillIconCard key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
