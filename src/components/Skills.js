import "../styles/Skills.scss";
import React from "react";
import Slide from "react-reveal/Slide";

const SkillsCard = ({ first, data, id }) => {
  return (
    <div className="col-md-3">
      <div className={first ? "skills__card card__first" : "skills__card"}>
        <div className={"skills__card__overlay overlay__" + id}>&nbsp;</div>
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
    </div>
  );
};
const Skills = ({ data }) => {
  return (
    <section className="skills__section">
      <div className="container">
        <div className="row">
          <div className="skills__unskew">
            <Slide left>
              <SkillsCard id="1" data={data[1]} first={true} />
            </Slide>

            <SkillsCard id="2" data={data[2]} />

            <SkillsCard id="3" data={data[3]} />

            <Slide right>
              <SkillsCard id="4" data={data[4]} />
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
