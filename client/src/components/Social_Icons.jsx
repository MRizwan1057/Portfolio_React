import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function SocialIcons() {
  return (
    <>
      <div className="container">
        <div className="row text-center mx-auto">
          <div className="col-md-12">
            <div className="footer_icons mb-4">
              <FaGithub className="" />
              <FaLinkedin className=" " />
              <FaWhatsapp className=" " />
              <FaEnvelope className=" " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
