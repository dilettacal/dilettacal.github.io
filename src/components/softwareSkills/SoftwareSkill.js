import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            const IconComponent = skills.customIcon;
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.customIcon ? (
                  typeof skills.customIcon === "string" ? (
                    <img
                      src={skills.customIcon}
                      alt={skills.skillName}
                      className="custom-skill-icon"
                    />
                  ) : (
                    <div className="custom-skill-icon-svg">
                      <IconComponent />
                    </div>
                  )
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
