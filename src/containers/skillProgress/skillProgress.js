import React, { useState } from "react";
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
            <h1 className="skills-heading">My focus over the last {maxYears} Years</h1>
            {techStack.subtitle && (
              <p className="skills-subtitle">{techStack.subtitle}</p>
            )}
            {techStack.experience.map((exp, i) => {
              // Use yearsInTimeframe directly (should not exceed maxYears)
              const yearsInTimeframe = Math.min(exp.yearsInTimeframe || exp.yearsOfExperience, maxYears);
              // Calculate percentage based on configurable max years
              const progressPercentage = (yearsInTimeframe / maxYears) * 100;
              
              // Determine position based on position field
              let progressStyle;
              if (exp.position === "start") {
                // Fill from the beginning (left side)
                progressStyle = {
                  width: `${progressPercentage}%`,
                  marginLeft: '0'
                };
              } else if (exp.position === "end") {
                // Fill from the end (right side)
                progressStyle = {
                  width: `${progressPercentage}%`,
                  marginLeft: 'auto'
                };
              } else {
                // Default: fill from the end (right side)
                progressStyle = {
                  width: `${progressPercentage}%`,
                  marginLeft: 'auto'
                };
              }
              
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
                  <p className="skill-name">{exp.Stack}</p>
                  <div 
                    className="meter"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                    style={{ cursor: exp.details ? 'pointer' : 'default' }}
                  >
                    <span style={progressStyle}></span>
                    {/* Add vertical tick marks for years */}
                    {Array.from({ length: maxYears - 1 }, (_, tickIndex) => {
                      const tickPosition = ((tickIndex + 1) / maxYears) * 100;
                      return (
                        <div
                          key={tickIndex}
                          className="year-tick"
                          style={{ left: `${tickPosition}%` }}
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
