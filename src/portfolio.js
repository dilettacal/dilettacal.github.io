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
  gmail: "dilettacal.dev@gmail.com",
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
    emoji(
      "⚡ Build large-scale data pipelines and perform advanced data exploration and analysis (Python, pyspark, SQL, pandas, numpy, scikit-learn)"
    ),
    emoji(
      "⚡ Develop and deploy NLP and LLM-based applications (OpenAI/Anthropic and Open-Source Models, HuggingFace, LangChain, crewai, gradio)"
    ),
    emoji(
      "⚡ Design scalable cloud architectures with Kubernetes, Docker or Databricks based. Cloud: Azure, AWS."
    )
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
      subHeader:
        "Bachelor of Science in Applied Computer Science (Second Study)",
      duration: "October 2016 - September 2019",
      desc: "Bachelor of Science with focus on Data Science and AI",
      descBullets: [
        "Bachelor Thesis: 'Neural Machine Translation: A comparison of selected architectures.'"
      ]
    },
    {
      schoolName: "University of Pisa",
      logo: require("./assets/images/Unipi_logo.jpg"),
      subHeader:
        "Master of Arts & Bachelor of Arts in Linguistics and Translation (First Study)",
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
      desc: "Founder of a non fictionpublishing company.",
      descBullets: [
        "Managed small-scale publishing projects as a side activity, covering market and niche analysis, AI-assisted review mining, and targeted Amazon/Meta ad campaigns — applying data-driven methods and project management skills to improve visibility and profitability."
      ]
    },
    {
      role: "Senior Data Engineer",
      company: "CARIAD SE",
      companylogo: require("./assets/images/cariad_tech_logo.jpeg"),
      date: "March 2022 – Present",
      desc: "Data pipeliens, Data Science and AI Engineering",
      descBullets: [
        "Developed production-ready GenAI solutions for survey response prediction, feedback summarization and agent-based project management automation.",
        "Improved positional accuracy of over 78,000 charging stations by designing and operating large-scale EV telemetry pipelines for millions of vehicles of the Volkswagen Group.",
        "Significantly contributed to the migration from Databricks-Medallion architecture to Kubernetes-Microservices, achieving a reduction of operating costs by approximately 70% with increased stability of streaming pipelines.",
        "Led code reviews, mentoring and knowledge sharing initiatives to ensure technical quality and prevent knowledge silos.",
        "Conducted exploratory data analysis to ensure data integrity and data contract compliance; clarified anomalies in close collaboration with stakeholders."
      ]
    },
    {
      role: "NLU Software Engineer",
      company: "CARIAD SE",
      companylogo: require("./assets/images/cariad_tech_logo.jpeg"),
      date: "Dec 2018 – Feb 2022 *",
      desc: "NLU Software Engineer for Group Digital Assistant.",
      descBullets: [
        "Improved the recognition and classification accuracy of speech utterances in vehicle assistants by developing hybrid NLU models based on context-free grammars and Machine Learning methods.",
        "Engineered Python- and Java-based toolchains to enable efficient training, evaluation and packaging of NLU models across different domains and languages.",
        "Extended assistant functions by implementing a Question-Answering module based on Azure Cognitive Services.",
        "* Supported NLU pre-development as a Work Study (Dec 2018 -- Aug 2019)."
      ]
    },
    {
      role: "Early Career",
      company: "Several Companies and Freelance",
      companylogo: require("./assets/images/early_career.png"),
      date: "2012 -- 2018",
      desc: "Translator, Linguist and Software Engineer",
      descBullets: [
        "At Plunet GmbH: Engineered automated integration tests for online CAT tools to ensure stable interfaces and processes as a Work Study.",
        "At think global GmbH and as a Freelancer: Performed technical translation with a focus on (machine) translation and NLP-based automation and data preparation."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects & Activities",
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
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
      slides_url:
        "https://www.linkedin.com/posts/dilettacal_what-an-inspiring-day-at-the-unicorns-in-activity-7383546764525637632-jdBK",
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
    "Are you hiring a Senior Data/AI Engineer? Feel free to reach out to me!",
  // number: "+92-0000000000",
  email_address: "dilettacal.dev@gmail.com"
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
