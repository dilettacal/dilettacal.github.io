import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
        {cardInfo.duration && (
          <div className="course-duration-badge">
            <span className="duration-icon">⏱️</span>
            <span className="duration-text">{cardInfo.duration}</span>
          </div>
        )}
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          // Check if this is a Certification link and if the achievement is in progress
          const isCertification = v.name
            .toLowerCase()
            .includes("certification");
          const isInProgress = cardInfo.inProgress && isCertification;

          return (
            <span
              key={i}
              className={
                isDark
                  ? `dark-mode certificate-tag ${
                      isInProgress ? "in-progress" : ""
                    }`
                  : `certificate-tag ${isInProgress ? "in-progress" : ""}`
              }
              onClick={() => !isInProgress && openUrlInNewTab(v.url, v.name)}
              style={{cursor: isInProgress ? "default" : "pointer"}}
            >
              {isInProgress ? "🔄 In Progress" : v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
