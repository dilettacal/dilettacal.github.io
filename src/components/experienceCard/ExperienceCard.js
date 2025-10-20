// components/experienceCard/ExperienceCard.js
import React, {useState, createRef, useEffect} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [expandDirection, setExpandDirection] = useState("right");
  const imgRef = createRef();
  const cardRef = createRef();

  // Handle ESC key
  useEffect(() => {
    if (flipped) {
      // Handle ESC key
      const handleEsc = e => {
        if (e.key === "Escape") {
          setFlipped(false);
        }
      };
      document.addEventListener("keydown", handleEsc);

      return () => {
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
      ? descBullets.map((item, i) => {
          // Check if the item starts with an emoji (comprehensive emoji detection)
          const hasEmoji = /^[\p{Emoji}]/u.test(item);

          let emoji = "";
          let textContent = item;

          if (hasEmoji) {
            // Extract the first emoji and the rest of the text
            const emojiMatch = item.match(/^([\p{Emoji}]+)/u);
            if (emojiMatch) {
              emoji = emojiMatch[1];
              textContent = item.substring(emoji.length).trim();
            }
          }

          return (
            <li
              key={i}
              className={isDark ? "subTitle dark-mode-text" : "subTitle"}
              data-has-emoji={hasEmoji}
              data-emoji={emoji}
            >
              {textContent}
            </li>
          );
        })
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
        ref={cardRef}
        className={`exp-card ${isDark ? "exp-card-dark" : ""} ${
          flipped ? "expanded" : ""
        } ${flipped ? `expand-${expandDirection}` : ""}`}
        role="button"
        tabIndex={0}
        onClick={() => {
          if (!flipped) {
            // On large screens, detect card position to determine expand direction
            if (window.innerWidth >= 1024 && cardRef.current) {
              const rect = cardRef.current.getBoundingClientRect();
              const cardCenterX = rect.left + rect.width / 2;
              const viewportCenterX = window.innerWidth / 2;

              // If card is on left half, expand right. If on right half, expand left
              setExpandDirection(
                cardCenterX < viewportCenterX ? "right" : "left"
              );
            }
            setFlipped(true);
          }
        }}
        onKeyDown={e => {
          if (!flipped && (e.key === "Enter" || e.key === " ")) {
            if (window.innerWidth >= 1024 && cardRef.current) {
              const rect = cardRef.current.getBoundingClientRect();
              const cardCenterX = rect.left + rect.width / 2;
              const viewportCenterX = window.innerWidth / 2;
              setExpandDirection(
                cardCenterX < viewportCenterX ? "right" : "left"
              );
            }
            setFlipped(true);
          }
        }}
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
