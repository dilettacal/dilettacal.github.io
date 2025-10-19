/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Custom skill icons (import SVGs as React components for color control)
import {ReactComponent as PysparkIcon} from "./assets/images/simpleicons/apachespark.svg";
import {ReactComponent as KubernetesIcon} from "./assets/images/simpleicons/kubernetes.svg";
import {ReactComponent as DatabricksIcon} from "./assets/images/simpleicons/databricks.svg";
import {ReactComponent as HuggingfaceIcon} from "./assets/images/simpleicons/huggingface.svg";
import {ReactComponent as LangchainIcon} from "./assets/images/simpleicons/langchain.svg";
import {ReactComponent as CrewaiIcon} from "./assets/images/simpleicons/crewai.svg";
import {ReactComponent as GradioIcon} from "./assets/images/simpleicons/gradio.svg";
import {ReactComponent as AnthropicIcon} from "./assets/images/simpleicons/anthropic.svg";
import {ReactComponent as OpenaiIcon} from "./assets/images/simpleicons/openai.svg";
import {ReactComponent as PostgreSQLIcon} from "./assets/images/simpleicons/postgresql.svg";
import {ReactComponent as GithubActionsIcon} from "./assets/images/simpleicons/githubactions.svg";
import {ReactComponent as AzureIcon} from "./assets/images/svgrepo/azure-icon-svgrepo-com-grey.svg";
import {ReactComponent as PytorchIcon} from "./assets/images/simpleicons/pytorch.svg";
import {ReactComponent as SpacyIcon} from "./assets/images/simpleicons/spacy.svg";
import {ReactComponent as TerraformIcon} from "./assets/images/simpleicons/terraform.svg";
// Achievement/Certification logos (import as regular images for <img> tags)
import udemyLogo from "./assets/images/svgrepo/udemy-svgrepo-com.svg";
import linkedinLogo from "./assets/images/svgrepo/linkedin-svgrepo-com.svg";
import courseraLogo from "./assets/images/svgrepo/coursera-svgrepo-com.svg";
import udacityLogo from "./assets/images/svgrepo/udacity-svgrepo-com.svg";

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
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dilettacal",
  linkedin: "https://www.linkedin.com/in/dilettacal/",
  gmail: "dilettacal.dev@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@diletta.calussi",
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
    // Core Language
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},

    // Data Engineering
    {skillName: "pyspark", customIcon: PysparkIcon},
    {skillName: "databricks", customIcon: DatabricksIcon},
    {skillName: "postgresql", customIcon: PostgreSQLIcon},

    // AI & LLM Ecosystem
    {skillName: "openai", customIcon: OpenaiIcon},
    {skillName: "anthropic", customIcon: AnthropicIcon},
    {skillName: "huggingface", customIcon: HuggingfaceIcon},
    {skillName: "langchain", customIcon: LangchainIcon},
    {skillName: "crewai", customIcon: CrewaiIcon},
    {skillName: "pytorch", customIcon: PytorchIcon},
    {skillName: "spacy", customIcon: SpacyIcon},
    {skillName: "gradio", customIcon: GradioIcon},

    // Cloud & Infrastructure
    {skillName: "azure", customIcon: AzureIcon},
    {skillName: "aws", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "kubernetes", customIcon: KubernetesIcon},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "terraform", customIcon: TerraformIcon},

    // DevOps & CI/CD
    {skillName: "github actions", customIcon: GithubActionsIcon}
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
      desc: "Focus on Data Science and AI.",
      descBullets: null
    },
    {
      schoolName: "University of Pisa",
      logo: require("./assets/images/Unipi_logo.jpg"),
      subHeader: "Master of Arts Linguistics and Translation (First Study)",
      duration: "September 2006 - May 2013",
      desc: "Focus on Linguistics and Translation.",
      descBullets: null
    },
    {
      schoolName: "University of Pisa",
      logo: require("./assets/images/Unipi_logo.jpg"),
      subHeader: "Bachelor of Arts in Languages and Literature (First Study)",
      duration: "September 2006 - May 2013",
      desc: "Focus on Linguistics, Languages, Literature and Translation.",
      descBullets: null
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  subtitle: emoji("📊 What and where I have been focusing on the last years 🎯"),
  maxYears: 10, // Configure the maximum years scale (change this to set your desired scale)
  experience: [
    {
      Stack: "Data Engineering & Analytics",
      periods: [
        { start: 0, duration: 5 } // Years 0-5 (all 5 years)
      ],
      details: "Built large-scale data pipelines processing millions of vehicle records. Migrated from Databricks to Kubernetes architecture, reducing costs by 70%. Improved charging station accuracy for 78,000+ stations using EV telemetry data."
    },
    {
      Stack: "LLM Engineering, AI and NLP",
      periods: [
        { start: 2, duration: 3 } // Years 2-5 (last 3 years)
      ],
      details: "Developed GenAI solutions for survey prediction and feedback summarization. Built agent-based project management automation using OpenAI/Anthropic APIs, LangChain, and CrewAI frameworks."
    },
    {
      Stack: "Data Science and Machine Learning",
      periods: [
        { start: 0, duration: 2 }, // Years 0-2 (first 2 years)
        { start: 4, duration: 1 }  // Year 4 (recent year)
      ],
      details: "Conducted exploratory data analysis and ensured data integrity compliance. Developed hybrid NLU models for vehicle assistants, improving speech recognition accuracy with context-free grammars and ML methods."
    },
    {
      Stack: "Cloud and DevOps",
      periods: [
        { start: 0, duration: 3 }, // Years 0-3 (first 3 years)
        { start: 4, duration: 1 }  // Year 4 (recent year)
      ],
      details: "Designed scalable cloud architectures on Azure and AWS. Implemented CI/CD pipelines with GitHub Actions, containerized applications with Docker, and orchestrated with Kubernetes. Infrastructure as Code with Terraform."
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  subtitle: emoji("For more details, click on the card. ⬇️"),
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
      role: "Several Roles",
      company: "Early Career",
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
  subtitle: emoji("🛠️ Technical contributions and beyond 🚀"),
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
      title: "LLM Engineering: Master AI, Large Language Models & Agents",
      subtitle:
        "Build and deploy 8 LLM apps, mastering Generative AI, RAG, LoRA and AI Agents.",
      image: udemyLogo,
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-805e7dc6-a4b9-4243-837e-ab5809e077c3/"
        },
        {
          name: "Course Description",
          url: "https://www.udemy.com/course/llm-engineering-master-ai-and-large-language-models/"
        }
      ]
    },
    {
      title: "Building Agentic AI Systems",
      subtitle:
        "Designed Agentic AI systems that enable autonomous decision-making and adaptive learning in dynamic environments.",
      image: linkedinLogo,
      imageAlt: "Linkedin Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/c707857f8e5a09b5a822aa0348e3f4745ed7059344fb3b288d32ae2fba44908a"
        },
        {
          name: "Course Description",
          url: "https://www.linkedin.com/learning/building-agentic-ai-systems/building-the-future-of-agentic-ai-29650812"
        }
      ]
    },
    // Fundamentals of Software Architecture for Big Data
    {
      title: "Fundamentals of Software Architecture for Big Data",
      subtitle:
        "CScalable data systems with robust engineering and big data processing expertise.",
      image: courseraLogo,
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/WQLYPQ5L6YBV"
        },
        {
          name: "Course Description",
          url: "https://www.coursera.org/learn/software-architecture-for-big-data-fundamentals"
        }
      ]
    },
    {
      title: "Natural Language Processing Nanodegree",
      subtitle:
        "NLP techniques e.g., tokenization, tagging, sentiment analysis, embeddings, translation, and speech recognition.",
      image: udacityLogo,
      imageAlt: "Udacity Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udacity.com/certificate/A7SD37GJ"
        },
        {
          name: "Course Description",
          url: "https://www.udacity.com/course/natural-language-processing-nanodegree--nd892"
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
  display: false // Set false to hide this section, defaults to true (ENABLE THE LINK IN THE GREETING)
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
