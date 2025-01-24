import { useState } from "react";
import { useEffect } from "react";
import SkillIconCard from "../../../components/card/SkillIconCard";

const SkillSection = () => {
  const [allSkills, setAllSkills] = useState([]);
  const [cardSize, setCardSize] = useState(0);
  const [cardRowLimit, setCardRowLimit] = useState(0);
  const [displayWidth, setDisplayWidth] = useState(innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDisplayWidth(innerWidth);
    });
  }, []);

  useEffect(() => {
    setCardSize(displayWidth < 1201 ? displayWidth / 12 : 1200 / 12);

    setCardRowLimit(
      displayWidth < 1201 ? Math.floor(displayWidth / 200) : 1200 / 200
    );

    fetch("/data/skillIcon.json")
      .then((res) => res.json())
      .then((data) => {
        const allSkillsIconList = [];
        const len = data.length;

        if (data.length > cardRowLimit) {
          console.log(cardRowLimit);
          let isOddRow = false;
          for (
            let i = 0;
            i < len;
            isOddRow ? (i += cardRowLimit) : (i += cardRowLimit + 1)
          ) {
            const row = data.slice(
              i,
              !isOddRow ? i + cardRowLimit : i + cardRowLimit + 1
            );
            isOddRow = !isOddRow;
            if (row.length > 0) {
              allSkillsIconList.push(row);
            }
          }
        }
        setAllSkills(allSkillsIconList);
        return;
      });
  }, [cardRowLimit, displayWidth]);

  return (
    <section>
      <div>
        <div className="w-10/12 mx-auto mt-12">
          {allSkills.length > 0 &&
            allSkills.map((skillRow, idx) => (
              <div
                style={{
                  marginTop:
                    displayWidth < 768 ? -cardSize / 1.2 : -cardSize / 2,
                }}
                key={idx}
                className={`flex justify-center gap-12`}
              >
                {skillRow.map((skill, i) => (
                  <SkillIconCard key={i} skill={skill} size={cardSize} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
