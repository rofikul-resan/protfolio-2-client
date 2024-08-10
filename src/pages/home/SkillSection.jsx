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
        console.log("row list", allSkillsIconList);
        setAllSkills(allSkillsIconList);
        return;
      });
  }, []);

  return (
    <section>
      <div>
        <SectionHeader title={"My Skills"} />
        {/* <div className="flex flex-col md:flex-row flex-wrap gap-12 w-10/12 mx-auto justify-self-end">
          {allSkills.map((skill, i) => (
            <SkillIconCard key={i} skill={skill} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default SkillSection;
