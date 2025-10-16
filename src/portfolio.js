/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "dilettacal",
  title: "Hi all, I'm Diletta",
  subTitle: emoji(
    "A passionate AI and Data Engineer with 8+ years of experience building scalable data pipelines and LLM-powered AI applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dilettacal",
  linkedin: "https://www.linkedin.com/in/dilettacal/",
  gmail: "diletta.calussi@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@dilettacalussi",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI and Data Engineer",
  skills: [
    emoji("⚡ Build large-scale data pipelines and perform advanced data exploration and analysis (Python, pyspark, SQL, pandas, numpy, scikit-learn)"),
    emoji("⚡ Develop and deploy NLP and LLM-based applications (OpenAI/Anthropic and Open-Source Models, HuggingFace, LangChain, crewai, gradio)"),
    emoji("⚡ Design scalable cloud architectures with Kubernetes, Docker or Databricks based. Cloud: Azure, AWS.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Applied Sciences Berlin",
      logo: require("./assets/images/S11_HTW_Berlin_Logo_pos_GRUEN_RGB.jpg"),
      subHeader: "Bachelor of Science in Applied Computer Science (Second Study)",
      duration: "October 2016 - September 2019",
      desc: "Bachelor of Science with focus on Data Science and AI",
      descBullets: [
        "Bachelor Thesis: 'Neural Machine Translation: A comparison of selected architectures.'",
      ]
    },
    {
      schoolName: "University of Pisa",
      logo: require("./assets/images/Unipi_logo.jpg"),
      subHeader: "Master of Arts & Bachelor of Arts in Linguistics and Translation (First Study)",
      duration: "September 2006 - May 2013",
      desc: "First study, full cycle with focus on Linguistics, Languages (German, Russian and English) and Translation.",
      descBullets: null
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI Engineering",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Independent Publisher",
      company: "Freelance",
      companylogo: require("./assets/images/reboot_logo.png"),
      date: "Jan 2024 – Present",
      desc: "Founder of a publishing company with focus on non-fiction books.",
      descBullets: [
        "Managed small-scale publishing projects as a side activity, covering market and niche analysis, AI-assisted review mining, and targeted Amazon/Meta ad campaigns — applying data-driven methods and project management skills to improve visibility and profitability."
      ]
    },
    {
      role: "Senior Data Engineer",
      company: "CARIAD SE",
      companylogo: require("./assets/images/cariad_logo.png"),
      date: "March 2022 – Present",
      desc: "Data/AI Engineer in POI Management team and Pre-Development team.",
      descBullets: [
        "Contributed to the development of an AI based solution to predict customer survey responses.",
        "Improved positional accuracy of 78,000+ charging POIs by engineering large-scale telemetry pipelines processing data from millions of vehicles, delivering over 1.3 M validated sessions biweekly across Volkswagen Group brands.",
        "Designed and implemented the core session-creation algorithm for multibrand telemetry, reconstructing unordered events into real-time sessions that enabled analytics, clustering, and spatial validation.",
        "Contributed to the migration from medallion architecture to Kubernetes-based microservices by refactoring ingestion and session-creation components; this process achieved roughly 65%% cost reduction while preserving stability and data quality.",
        "Led code reviews and mentoring across data engineering and data science tasks, ensuring code quality, reproducibility, and adherence to best practices while supporting colleagues in model evaluation, exploratory analysis, and pipeline integration."
      ]
    },
    {
      role: "NLU Software Engineer",
      company: "CARIAD SE",
      companylogo: require("./assets/images/cariad_logo.png"),
      date: "Jan 2020 – Feb 2022",
      desc: "NLU Software Engineer for Group Digital Assistant.",
      descBullets: [
        "Improved recognition accuracy and coverage for millions of drivers by delivering production NLU services for in-car assistants.",
        "Enabled integration of NLU systems into embedded platforms by engineering Python- and Java-based toolchains for training, evaluation, and packaging of NLU models.",
        "Extended assistant functionality by developing a Question Answering module using Azure Cognitive Services, enabling retrieval of domain knowledge beyond predefined commands.",
      ]
    },
    {
      role: "Software Engineer (Work Student)",
      company: "Carmeq GmbH; Plunet GmbH",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Dec 2018 - Aug 2019 ; Oct 2017 - Nov 2018",
      desc: "Software Engineer (Work Student) in Automotive and Localization domains.",
      descBullets: [
        "At Carmeq GmbH: Supported the Pre-Development team with the development of NLU/NLP applications.",
        "At Plunet GmbH: Extended the test automation suite with tests of integration of CAT Tools, e.g. XTM and Memsource (Java, Selenium, Cucumber)."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects & Participation",
  subtitle: "Technical contributions and beyond",
  projects: [
    {
      image: require("./assets/images/car_ai.png"),
      projectName: "Charging Feedback",
      projectDesc: "Enhancing the Charging Experience by leveraging Swarm Data",
      footerLink: [
        {
          name: "Read more",
          url: "https://cariad.technology/de/en/news/stories/enhancing-charging-experience.html"
        }
        //  
      ]
    },
    {
      image: require("./assets/images/code-as-you-are.png"),
      projectName: "Code as you are (LGBTIQ+ network)",
      projectDesc: "Part of CORE Team at CARIAD's LGBTIQ+ network",
      footerLink: [
        {
          name: "Read More",
          url: "https://cariad.technology/de/en/careers/diversity-and-inclusion.html"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "How AI pushed me forward (and not away)",
      subtitle: "Unicorns in Tech Summit 2025",
      slides_url: "https://www.linkedin.com/posts/dilettacal_what-an-inspiring-day-at-the-unicorns-in-activity-7383546764525637632-jdBK",
      event_url: "https://www.unicornsintech.com/uits25/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Are you hiring a Senior Data/AI Engineer? You can reach out to me!",
  // number: "+92-0000000000",
  email_address: "diletta.calussi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
