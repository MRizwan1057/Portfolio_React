import React from "react";
import { NavLink } from "react-router-dom";

const ProjectData = [
  {
    pimg: "https://picsum.photos/100/80",
    pName: "1",
    pSkill: "react",
    pHost: "",
    pGCode: "",
    pLDemp: "",
  },
  {
    pimg: "https://picsum.photos/100/80",
    pName: "2",
    pSkill: "node",
    pHost: "",
    pGCode: "",
    pLDemp: "",
  },
  {
    pimg: "https://picsum.photos/100/80",
    pName: "3",
    pSkill: "html",
    pHost: "",
    pGCode: "",
    pLDemp: "",
  },
  {
    pimg: "https://picsum.photos/100/80",
    pName: "4",
    pSkill: "css",
    pHost: "",
    pGCode: "",
    pLDemp: "",
  },
  {
    pimg: "https://picsum.photos/100/80",
    pName: "5",
    pSkill: "fire",
    pHost: "netlify",
    pGCode: "",
    pLDemp: "",
  },
  {
    pimg: "https://picsum.photos/100/80",
    pName: "6",
    pSkill: "mern",
    pHost: "",
    pGCode: "",
    pLDemp: "",
  },
];

const ProjectCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card myProjectCard">
          <img
            src={props.pimg}
            className="img-fluid img-thumbnail mb-3"
            alt="..."
          />
          <div className="card-body myProjectCardBody">
            <h4 className="card-title">{props.pName}</h4>
            <h6 className="card-title">{props.pHost}</h6>

            <p className="card-text">{props.pSkill}</p>
            <NavLink
              to={props.pGCode}
              className="btn  btn-outline-dark github_btn mx-2"
            >
              GitHub
            </NavLink>
            <NavLink
              to={props.pLDemp}
              className="btn btn-dark-outline liveDemo_btn mx-2"
            >
              Live Demo
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProjectData, ProjectCard };
