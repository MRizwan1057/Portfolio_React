import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer fixed-bottom mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <div className="footer_icons mb-4 ">
                <FaGithub className="" />
                <FaLinkedinIn className=" " />
                <FaWhatsapp className=" " />
                <FaEnvelope className=" " />
              </div>
              <div>
                <p>Copyright © 2023 All Rights Reserved by .</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
