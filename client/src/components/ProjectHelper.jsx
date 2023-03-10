import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const ProjectData = [
  {
    pimg: "https://picsum.photos/100/80",
    pName: "E-Commerce Site",
    pSkill: "Mern Stack",
    pHost: "Heruko",
    pGCode: "",
    pLDemo: "",
  },
  {
    pimg: "https://picsum.photos/100/80",
    pName: "React Site",
    pSkill: "React Js",
    pHost: "",
    pGCode: "",
    pLDemo: "",
  },
  {
    pimg: "https://picsum.photos/100/80",
    pName: "Tra",
    pSkill: "html",
    pHost: "",
    pGCode: "",
    pLDemo: "",
  },
  {
    pimg: "https://picsum.photos/100/80",
    pName: "4",
    pSkill: "css",
    pHost: "",
    pGCode: "",
    pLDemo: "",
  },
  {
    pimg: "https://picsum.photos/100/80",
    pName: "5",
    pSkill: "fire",
    pHost: "netlify",
    pGCode: "",
    pLDemo: "",
  },
  {
    pimg: "https://picsum.photos/100/80",
    pName: "6",
    pSkill: "mern",
    pHost: "",
    pGCode: "",
    pLDemo: "",
  },
];

const ProjectCard = (project) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card myProjectCard">
          <img
            src={project.pimg}
            className="img-fluid img-thumbnail mb-3"
            alt="..."
          />
          <div className="card-body myProjectCardBody">
            <h4 className="card-title">{project.pName}</h4>
            <h6 className="card-title">Hosted on : {project.pHost}</h6>

            <p className="card-text">Skills Used : {project.pSkill}</p>
            <NavLink to={project.pGCode} className=" btn github_btn mx-2">
              GitHub
            </NavLink>
            {project.pLDemo && (
              <NavLink to={project.pLDemo} className="btn liveDemo_btn mx-2">
                Live Demo
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { ProjectData, ProjectCard };
