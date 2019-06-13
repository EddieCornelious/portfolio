import "../styles/Skills.scss";
import React from "react";
import Bounce from "react-reveal/Bounce";

const SkillsCard = ({ first, data }) => {
  return (
    <div className="col-sm-3">
      <Bounce bottom>
        <div className={first ? "skills__card card__first" : "skills__card"}>
          <div className="skills__card__overlay">&nbsp;</div>
          <div className="skills__card__content">
            <i className={data.font} />
            <h3>{data.title}</h3>
            <ul className="skills__list">
              {data.skills.map(e => {
                return <li key={e}>{e}</li>;
              })}
            </ul>
          </div>
        </div>
      </Bounce>
    </div>
  );
};
const Skills = ({ data }) => {
  return (
    <section className="skills__section">
      <div className="container skills__unskew">
        <div className="row">
          <SkillsCard data={data[1]} first={true} />

          <SkillsCard data={data[2]} />

          <SkillsCard data={data[3]} />

          <SkillsCard data={data[4]} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
