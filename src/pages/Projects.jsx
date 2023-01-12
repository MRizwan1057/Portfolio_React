import React from "react";
import { SocialIcons } from "../components/Social_Icons";

function Projects() {
  return (
    <>
      <section className="projects">
        <div className="container my-3">
          <div className="row text-center">
            <div className="col-md-12">
              <h3>Find Me On </h3>
              <p>Feel Free to Connect with me</p>
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
