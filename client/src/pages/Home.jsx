import React from "react";
import { SocialIcons } from "../components/Social_Icons";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container my-3">
          <div className="row text-center">
            <div className="col-md-12">
              <h3>
                <span className="orange_span">Find</span> Me On
              </h3>
              <p>Feel Free to Connect with me</p>
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
