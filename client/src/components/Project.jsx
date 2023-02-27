const Project = (project) => {
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
export default Project;
