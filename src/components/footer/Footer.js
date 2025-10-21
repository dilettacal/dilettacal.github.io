import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © 2025 Diletta Calussi
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Customized from Theme{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a>
        </p>
        <p
          className={
            isDark
              ? "dark-mode footer-text footer-credits"
              : "footer-text footer-credits"
          }
        >
          Icons and graphics from{" "}
          <a href="https://simpleicons.org/" target="_blank" rel="noreferrer">
            Simple Icons
          </a>
          {", "}
          <a href="https://www.svgrepo.com/" target="_blank" rel="noreferrer">
            SVG Repo
          </a>
          {" and "}
          <a href="https://lottiefiles.com/" target="_blank" rel="noreferrer">
            Lottie
          </a>
        </p>
      </div>
    </Fade>
  );
}
