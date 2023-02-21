import React from "react";
import GitHubCalendar from "react-github-calendar";

import {
  SiBootstrap,
  SiCss3,
  SiDart,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGithub,
  SiHeroku,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiJquery,
  SiMaterialui,
  SiMongodb,
  SiNetlify,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiVisualstudiocode,
  SiWordpress,
} from "react-icons/si";

const Tools = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row my-4">
            <div className="col-md12 text-center mx-auto">
              <h3>
                <span className="orange_span">Tools</span> I Use
              </h3>
            </div>
          </div>
          <div className="row align-items-center text-center">
            <div className="col-md-2 col-sm-4">
              <div className="toolWrapper">
                <SiVisualstudiocode />
                <h6>VS Code</h6>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="toolWrapper">
                <SiGithub />
                <h6>Github</h6>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="toolWrapper">
                <SiPostman />
                <h6>Postman</h6>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="toolWrapper">
                <SiHeroku />
                <h6>Heruko</h6>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="toolWrapper">
                <SiFirebase />
                <h6>Firebase</h6>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="toolWrapper">
                <SiNetlify />
                <h6>Netlify</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const SkillSet = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row text-center my-4">
          <div className="col-md-12">
            <h3>
              Professional
              <span className="orange_span"> Skills</span> Set
            </h3>
          </div>
        </div>
        <div className="row text-center gy-3">
          <div className="col-md-2 col-sm-4">
            <div className="skillWrapper">
              <SiHtml5 />
              <h6>HTML</h6>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="skillWrapper">
              <SiCss3 />
              <h6>CSS</h6>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="skillWrapper">
              <SiBootstrap />
              <h6>Bootsrap</h6>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="skillWrapper">
              <SiMaterialui />
              <h6>Material UI</h6>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="skillWrapper">
              <SiJquery />
              <h6>JQuery</h6>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="skillWrapper">
              <SiWordpress />
              <h6>WordPress</h6>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="skillWrapper">
              <SiReact />
              <h6>React Js</h6>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="skillWrapper">
              <SiNodedotjs />
              <h6>Node Js</h6>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="skillWrapper">
              <SiExpress />
              <h6>Express Js</h6>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="skillWrapper">
              <SiMongodb />
              <h6>Mongo DB</h6>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="skillWrapper">
              <SiFirebase />
              <h6>Firebase</h6>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="skillWrapper">
              <SiFastapi />
              <h6>Rest API's</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProgLangs = () => {
  return (
    <>
      <div className="container my-4">
        <div className="row text-center my-3">
          <div className="col-md-12">
            <h3>
              <span className="orange_span"> Programming</span> Languages
            </h3>
          </div>
        </div>
        <div className="row text-center my-3">
          <div className="col-md">
            <div className="plWrapper">
              <SiJava />
              <h6>Java</h6>
            </div>
          </div>
          <div className="col-md">
            <div className="plWrapper">
              <SiJavascript />
              <h6>JavaScript</h6>
            </div>
          </div>
          <div className="col-md">
            <div className="plWrapper">
              <SiDart />
              <h6>Dart</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Github = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row text-center mx-auto my-3">
          <div className="col-md-12 ">
            <h3>
              Days I<span className="orange_span"> Code</span>
            </h3>
          </div>
        </div>
        <div className="row text-center align-items-center mx-auto my-5">
          <div className="col-md-8 mx-auto">
            <GitHubCalendar
              username="MRizwan1057"
              blockSize={15}
              blockMargin={5}
              color="rgb(255, 69, 0)"
              fontSize={16}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export { SkillSet, Tools, ProgLangs, Github };
