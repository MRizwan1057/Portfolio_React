import React from "react";
import { ProgLangs, SkillSet } from "../components/SkillHelpers";
import Tools from "../components/Tools";

function Skills() {
  return (
    <>
      <section className="home">
        <div className="container my-3"></div>
      </section>
      <SkillSet />
      <Tools />
      <ProgLangs />
    </>
  );
}

export default Skills;
