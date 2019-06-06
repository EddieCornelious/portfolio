import "../styles/Skills.scss";
import React from "react";

const SkillsCard = () => {
  return (
    <div className="col-sm-3">
      <div className="skills__card">
        <i class="fa fa-database" />
        <h3>DATABASE</h3>
        <ul>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
        </ul>
      </div>
    </div>
  );
};
const Skills = () => {
  return (
    <section className="skills">
      <div className="container skills__unskew">
        <div className="row">
          <SkillsCard />
          <SkillsCard />
          <SkillsCard />
          <SkillsCard />
        </div>
      </div>
    </section>
  );
};

export default Skills;
