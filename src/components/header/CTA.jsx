/* CALL TO ACTION (CTA) */
import AdnanAzad_Resume from "../../assets/AdnanAzad_Resume.pdf";
import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a href={AdnanAzad_Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};
export default CTA;
