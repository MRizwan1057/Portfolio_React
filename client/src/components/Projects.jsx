import Project from "./Project";

const Projects = ({ project }) => {
  return (
    <div className="project">
      {project.map((p, ind) => (
        <Project project={p} key={ind} />
      ))}
    </div>
  );
};

export default Projects;
