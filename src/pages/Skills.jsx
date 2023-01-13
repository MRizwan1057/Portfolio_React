import React from "react";
import { ProgLangs, SkillSet, Tools } from "../components/SkillHelpers";

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
