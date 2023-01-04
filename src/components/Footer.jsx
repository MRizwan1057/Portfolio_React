import React from "react";
import {
  FaGithubSquare,
  FaLinkedinIn,
  FaWhatsappSquare,
  FaEnvelopeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h5>Copyright © 2023 All Rights Reserved by .</h5>
        </div>
        <div>
          <FaGithubSquare />
          <FaLinkedinIn />
          <FaWhatsappSquare />
          <FaEnvelopeSquare />
        </div>
      </footer>
    </>
  );
};

export default Footer;
