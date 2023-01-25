import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <footer className="footer sticky-bottom bg-light py-2">
        <div className="container">
          <div className="row text-center align-items-center">
            <div className="col-md-6 mx-auto ">
              <div>
                <p>
                  Design and Developed by |<span className="orange_span"></span>
                </p>
              </div>
            </div>
            <div className="col-md-6 mx-auto text-center">
              <div>
                <p>
                  Copyright © {year} All Rights Reserved by |
                  <span className="orange_span"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
