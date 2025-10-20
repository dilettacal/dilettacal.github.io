/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Import JSON data
import profileData from "./data/profile.json";
import experienceData from "./data/experience.json";
import educationData from "./data/education.json";
import skillsData from "./data/skills.json";
import techStackData from "./data/techStack.json";
import achievementsData from "./data/achievements.json";
import projectsData from "./data/projects.json";
import talksData from "./data/talks.json";
import blogsData from "./data/blogs.json";
import podcastData from "./data/podcast.json";
import resumeData from "./data/resume.json";
import openSourceData from "./data/opensource.json";
import socialData from "./data/social.json";

// Import mappings
import {companyLogos, schoolLogos, certificationLogos, projectImages} from "./config/imageMappings";
import {customIcons} from "./config/iconMappings";

// Splash Screen

const splashScreen = {
  enabled: socialData.splashScreen.enabled,
  animation: splashAnimation,
  duration: socialData.splashScreen.duration
};

// Summary And Greeting Section

const illustration = {
  animated: socialData.illustration.animated
};

const greeting = {
  username: profileData.greeting.username,
  title: profileData.greeting.title,
  subTitle: emoji(profileData.greeting.subTitle),
  resumeLink: profileData.greeting.resumeLink,
  displayGreeting: profileData.greeting.displayGreeting
};

// Social Media Links

const socialMediaLinks = {
  ...profileData.socialMediaLinks
};

// Skills Section

const skillsSection = {
  title: skillsData.title,
  subTitle: skillsData.subTitle,
  skills: skillsData.skills.map(skill => emoji(skill)),
  softwareSkills: skillsData.softwareSkills.map(skill => {
    if (skill.customIcon) {
      return {
        skillName: skill.skillName,
        customIcon: customIcons[skill.customIcon]
      };
    }
    return {
      skillName: skill.skillName,
      fontAwesomeClassname: skill.fontAwesomeClassname
    };
  }),
  display: skillsData.display
};

// Education Section

const educationInfo = {
  display: educationData.display,
  schools: educationData.schools.map(school => ({
    schoolName: school.schoolName,
    logo: schoolLogos[school.logoKey],
    subHeader: school.subHeader,
    duration: school.duration,
    desc: school.desc,
    descBullets: school.descBullets
  }))
};

// Tech Stack - Your top proficient stacks/tech experience
const techStackMaxYears = techStackData.maxYears;
const techStack = {
  viewSkillBars: techStackData.viewSkillBars,
  subtitle: emoji(techStackData.subtitle),
  hint: emoji(techStackData.hint),
  maxYears: techStackMaxYears,
  experience: techStackData.experience.map(exp => ({
    Stack: exp.Stack,
    periods: exp.periods,
    details: exp.details,
    icons: exp.icons.map(icon => {
      if (icon.customIcon) {
        return {
          customIcon: customIcons[icon.customIcon],
          name: icon.name
        };
      }
      return {
        fontAwesomeClassname: icon.fontAwesomeClassname,
        name: icon.name
      };
    })
  })),
  displayCodersrank: techStackData.displayCodersrank
};

// Work experience section
const workExperiences = {
  display: experienceData.display,
  subtitle: emoji(experienceData.subtitle),
  experience: experienceData.experiences.map(exp => ({
    role: exp.role,
    company: exp.company,
    companylogo: companyLogos[exp.companyLogoKey],
    date: exp.date,
    desc: exp.desc,
    descBullets: exp.descBullets
  }))
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: openSourceData.showGithubProfile,
  display: openSourceData.display
};

// Some big projects you have worked on

const bigProjects = {
  title: projectsData.title,
  subtitle: emoji(projectsData.subtitle),
  projects: projectsData.projects.map(project => ({
    image: projectImages[project.imageKey],
    projectName: project.projectName,
    projectDesc: project.projectDesc,
    footerLink: project.footerLink
  })),
  display: projectsData.display
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(achievementsData.title),
  subtitle: achievementsData.subtitle,
  achievementsCards: achievementsData.achievementsCards.map(card => ({
    title: card.title,
    subtitle: card.subtitle,
    image: certificationLogos[card.imageKey],
    imageAlt: card.imageAlt,
    inProgress: card.inProgress,
    duration: card.duration,
    footerLink: card.footerLink
  })),
  display: achievementsData.display
};

// Blogs Section

const blogSection = {
  title: blogsData.title,
  subtitle: blogsData.subtitle,
  displayMediumBlogs: blogsData.displayMediumBlogs,
  blogs: blogsData.blogs,
  display: blogsData.display
};

// Talks Sections

const talkSection = {
  title: emoji(talksData.title),
  subtitle: emoji(talksData.subtitle),
  talks: talksData.talks,
  display: talksData.display
};

// Podcast Section

const podcastSection = {
  title: emoji(podcastData.title),
  subtitle: podcastData.subtitle,
  podcast: podcastData.podcast,
  display: podcastData.display
};

// Resume Section
const resumeSection = {
  title: resumeData.title,
  subtitle: resumeData.subtitle,
  display: resumeData.display
};

const contactInfo = {
  title: emoji(profileData.contactInfo.title),
  subtitle: profileData.contactInfo.subtitle,
  email_address: profileData.contactInfo.email_address
};

// Twitter Section

const twitterDetails = {
  userName: socialData.twitter.userName,
  display: socialData.twitter.display
};

const isHireable = profileData.isHireable;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
