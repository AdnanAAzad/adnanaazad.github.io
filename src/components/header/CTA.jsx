/* CALL TO ACTION (CTA) */
import AdnanAzadResume from "../../assets/AdnanAzadResume.pdf";
import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={AdnanAzadResume}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};
export default CTA;
