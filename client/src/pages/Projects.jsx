import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProjectCard, ProjectData } from "../components/ProjectHelper";
// import { SocialIcons } from "../components/Social_Icons";

const Projects = (project) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const res = await axios.get("http://localhost:4040/api/projects");
      setProjects(res.data);
      console.log(res.data);
    };
    getProjects();
  }, []);
  // console.log(project);
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

      {/* <Projects project={projects} /> */}
    </>
  );
};

export default Projects;
