import React, {useState} from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
// import Build from "../../assets/lottie/build";
import Build from "../../assets/lottie/coding";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  if (techStack.viewSkillBars) {
    // Use the configurable maxYears from portfolio.js
    const maxYears = techStack.maxYears;

    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">
              Technologies over the last {maxYears} years
            </h1>
            {techStack.subtitle && (
              <p className="skills-subtitle">{techStack.subtitle}</p>
            )}
            {techStack.experience.map((exp, i) => {
              // Calculate total years across all periods
              const totalYears = exp.periods
                ? exp.periods.reduce((sum, period) => sum + period.duration, 0)
                : exp.yearsInTimeframe || exp.yearsOfExperience || 0;

              const cappedTotalYears = Math.min(totalYears, maxYears);

              const handleMouseEnter = () => {
                if (exp.details) {
                  setActiveTooltip(i);
                }
              };

              const handleMouseLeave = () => {
                setActiveTooltip(null);
              };

              const handleClick = () => {
                if (exp.details) {
                  setActiveTooltip(activeTooltip === i ? null : i);
                }
              };

              return (
                <div key={i} className="skill">
                  <div className="skill-header-with-icons">
                    <p className="skill-name">{exp.Stack}</p>
                    {exp.icons && exp.icons.length > 0 && (
                      <div className="skill-tech-icons">
                        {exp.icons.map((icon, iconIndex) => {
                          const IconComponent = icon.customIcon;
                          return (
                            <span
                              key={iconIndex}
                              className="tech-icon-inline"
                              data-tooltip={icon.name}
                            >
                              {icon.customIcon ? (
                                typeof icon.customIcon === "string" ? (
                                  <img
                                    src={icon.customIcon}
                                    alt={icon.name || "tech icon"}
                                    className="tech-icon-img"
                                  />
                                ) : (
                                  <div className="tech-icon-svg">
                                    <IconComponent />
                                  </div>
                                )
                              ) : (
                                <i className={icon.fontAwesomeClassname}></i>
                              )}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div
                    className="meter"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                    style={{cursor: exp.details ? "pointer" : "default"}}
                  >
                    {/* Render multiple periods as separate segments */}
                    {exp.periods ? (
                      exp.periods.map((period, periodIndex) => {
                        const startPercentage = (period.start / maxYears) * 100;
                        const durationPercentage =
                          (period.duration / maxYears) * 100;

                        return (
                          <span
                            key={periodIndex}
                            className="progress-segment"
                            style={{
                              position: "absolute",
                              left: `${startPercentage}%`,
                              width: `${durationPercentage}%`,
                              height: "100%",
                              borderRadius: "0"
                            }}
                          />
                        );
                      })
                    ) : (
                      // Fallback for old format
                      <span
                        style={{
                          position: "absolute",
                          right: "0",
                          width: `${(cappedTotalYears / maxYears) * 100}%`,
                          height: "100%",
                          borderRadius: "0"
                        }}
                      />
                    )}

                    {/* Add vertical tick marks for years */}
                    {Array.from({length: maxYears - 1}, (_, tickIndex) => {
                      const tickPosition = ((tickIndex + 1) / maxYears) * 100;
                      return (
                        <div
                          key={tickIndex}
                          className="year-tick"
                          style={{left: `${tickPosition}%`}}
                        />
                      );
                    })}
                  </div>
                  {/* Tooltip */}
                  {exp.details && activeTooltip === i && (
                    <div className="skill-tooltip">
                      <div className="tooltip-content">
                        <p>{exp.details}</p>
                        <div className="tooltip-arrow"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
