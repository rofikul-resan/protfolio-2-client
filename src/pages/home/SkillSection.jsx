import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import SkillIconCard from "../../components/SkillIconCard";
import { useEffect } from "react";

const SkillSection = () => {
  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    fetch("/data/skillIcon.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const allSkillsIconList = [];
        const len = data.length;

        if (data.length > 6) {
          let isOddRow = false;
          for (let i = 0; i < len; isOddRow ? (i += 6) : (i += 7)) {
            const row = data.slice(i, !isOddRow ? i + 6 : i + 7);
            isOddRow = !isOddRow;
            if (row.length > 0) {
              allSkillsIconList.push(row);
            }
          }
        }
        setAllSkills(allSkillsIconList);
        return;
      });
  }, []);

  return (
    <section>
      <div>
        <SectionHeader title={"My Skills"} />
        <div className=" w-10/12 mx-auto mt-12 ">
          {allSkills.length > 0 &&
            allSkills.map((skillRow, idx) => (
              <div
                key={idx}
                className={`flex flex-wrap justify-center gap-12 ${
                  idx >= 1 ? "-mt-14" : ""
                } `}
              >
                {skillRow.map((skill) => (
                  <SkillIconCard key={skill.id} skill={skill} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
