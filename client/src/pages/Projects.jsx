import React from "react";
import { ProjectCard, ProjectData } from "../components/ProjectHelper";
// import { SocialIcons } from "../components/Social_Icons";

const Projects = () => {
  return (
    <>
      <div className="my-5">
        <h3 className="text-center">
          <strong>
            Personal <span className="orange_span">Projects</span>
          </strong>
        </h3>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-md-12">
            <div className="row  gy-5 my-5">
              {ProjectData.map((val, ind) => {
                return (
                  <ProjectCard
                    key={ind}
                    pimg={val.pimg}
                    pName={val.pName}
                    pHost={val.pHost}
                    pSkill={val.pSkill}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
