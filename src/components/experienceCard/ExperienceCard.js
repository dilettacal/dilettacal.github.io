// components/experienceCard/ExperienceCard.js
import React, {useState, createRef, useEffect} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const imgRef = createRef();

  // Handle ESC key and body scroll lock
  useEffect(() => {
    if (flipped) {
      // Lock body scroll when modal is open
      document.body.style.overflow = "hidden";

      // Handle ESC key
      const handleEsc = e => {
        if (e.key === "Escape") {
          setFlipped(false);
        }
      };
      document.addEventListener("keydown", handleEsc);

      return () => {
        document.body.style.overflow = "unset";
        document.removeEventListener("keydown", handleEsc);
      };
    }
  }, [flipped]);

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }
  const rgb = values =>
    typeof values === "undefined" ? null : `rgb(${values.join(", ")})`;

  const GetDescBullets = ({descBullets}) =>
    descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;

  return (
    <>
      {/* Backdrop - appears when card is flipped */}
      {flipped && (
        <div
          className="exp-card-backdrop"
          onClick={() => setFlipped(false)}
          aria-hidden="true"
        />
      )}

      {/* flip container */}
      <div
        className={`exp-card ${isDark ? "exp-card-dark" : ""} ${
          flipped ? "expanded" : ""
        }`}
        role="button"
        tabIndex={0}
        onClick={() => !flipped && setFlipped(true)}
        onKeyDown={e =>
          !flipped && (e.key === "Enter" || e.key === " ") && setFlipped(true)
        }
        aria-expanded={flipped}
        aria-label={`${cardInfo.role} at ${cardInfo.company}`}
      >
        <div className="exp-card-inner">
          {/* FRONT (compact) */}
          <div className="exp-card-side exp-card-front">
            <div
              className={isDark ? "experience-card-dark" : "experience-card"}
            >
              <div
                style={{background: rgb(colorArrays)}}
                className="experience-banner"
              >
                <div className="experience-blurred_div"></div>
                <div className="experience-div-company">
                  <h5 className="experience-text-company">
                    {cardInfo.company}
                  </h5>
                </div>
                <img
                  crossOrigin="anonymous"
                  ref={imgRef}
                  className="experience-roundedimg"
                  src={cardInfo.companylogo}
                  alt={cardInfo.company}
                  onLoad={getColorArrays}
                />
              </div>
              <div className="experience-text-details">
                <h5
                  className={
                    isDark
                      ? "experience-text-role dark-mode-text"
                      : "experience-text-role"
                  }
                >
                  {cardInfo.role}
                </h5>
                <h5
                  className={
                    isDark
                      ? "experience-text-date dark-mode-text"
                      : "experience-text-date"
                  }
                >
                  {cardInfo.date}
                </h5>
                {/* keep this short on front */}
                <p
                  className={
                    isDark
                      ? "subTitle experience-text-desc dark-mode-text"
                      : "subTitle experience-text-desc"
                  }
                >
                  {cardInfo.desc}
                </p>
              </div>
            </div>
          </div>

          {/* BACK (expanded, horizontal-ish content) */}
          <div className="exp-card-side exp-card-back">
            <div
              className={
                isDark
                  ? "experience-card-dark expanded-surface"
                  : "experience-card expanded-surface"
              }
            >
              <div className="expanded-header">
                <img
                  className="expanded-logo"
                  src={cardInfo.companylogo}
                  alt={cardInfo.company}
                />
                <div className="expanded-title">
                  <h4 className={isDark ? "dark-mode-text" : ""}>
                    {cardInfo.role}
                  </h4>
                  <div
                    className={`expanded-meta ${
                      isDark ? "dark-mode-text" : ""
                    }`}
                  >
                    <span>{cardInfo.company}</span> •{" "}
                    <span>{cardInfo.date}</span>
                  </div>
                </div>
              </div>

              <div className="expanded-body">
                <p
                  className={
                    isDark
                      ? "dark-mode-text expanded-description"
                      : "expanded-description"
                  }
                >
                  {cardInfo.desc}
                </p>
                {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
                  <ul className="expanded-list">
                    <GetDescBullets descBullets={cardInfo.descBullets} />
                  </ul>
                )}
              </div>

              <button
                className="expanded-close"
                onClick={e => {
                  e.stopPropagation();
                  setFlipped(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
