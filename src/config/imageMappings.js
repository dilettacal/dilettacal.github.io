/**
 * Image mappings for company logos, school logos, and other images
 * This keeps image imports in code while allowing JSON to reference them by key
 */

// Achievement/Certification logos (imported as regular images, not React components)
import udemyLogo from "../assets/images/svgrepo/udemy-svgrepo-com.svg";
import linkedinLogo from "../assets/images/svgrepo/linkedin-svgrepo-com.svg";
import courseraLogo from "../assets/images/svgrepo/coursera-svgrepo-com.svg";
import udacityLogo from "../assets/images/svgrepo/udacity-svgrepo-com.svg";

// Company logos for work experience
export const companyLogos = {
  freelance: require("../assets/images/reboot_logo.png"),
  cariad_tech: require("../assets/images/cariad_tech_logo.jpeg"),
  early_career: require("../assets/images/early_career.png")
};

// School logos for education
export const schoolLogos = {
  htw_berlin: require("../assets/images/S11_HTW_Berlin_Logo_pos_GRUEN_RGB.jpg"),
  unipi: require("../assets/images/Unipi_logo.jpg")
};

// Achievement/Certification logos
export const certificationLogos = {
  udemy: udemyLogo,
  linkedin: linkedinLogo,
  coursera: courseraLogo,
  udacity: udacityLogo
};

// Project images
export const projectImages = {
  car_ai: require("../assets/images/car_ai.png"),
  code_as_you_are: require("../assets/images/code-as-you-are.png")
};
