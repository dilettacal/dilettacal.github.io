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
import {ReactComponent as NextdotjsIcon} from "./assets/images/simpleicons/nextdotjs.svg";
import {ReactComponent as TailwindcssIcon} from "./assets/images/simpleicons/tailwindcss.svg";
import {ReactComponent as StreamlitIcon} from "./assets/images/simpleicons/streamlit.svg";
import {ReactComponent as RedisIcon} from "./assets/images/simpleicons/redis.svg";
import {ReactComponent as ApachekafkaIcon} from "./assets/images/simpleicons/apachekafka.svg";
import {ReactComponent as JupyterIcon} from "./assets/images/simpleicons/jupyter.svg";
import {ReactComponent as MongodbIcon} from "./assets/images/simpleicons/mongodb.svg";
import {ReactComponent as NewrelicIcon} from "./assets/images/simpleicons/newrelic.svg";
import {ReactComponent as PytestIcon} from "./assets/images/simpleicons/pytest.svg";
import {ReactComponent as NumpyIcon} from "./assets/images/simpleicons/numpy.svg";
import {ReactComponent as PandasIcon} from "./assets/images/simpleicons/pandas.svg";
import {ReactComponent as OllamaIcon} from "./assets/images/simpleicons/ollama.svg";

// svg repo
import {ReactComponent as CanvaIcon} from "./assets/images/svgrepo/canva-svgrepo-com.svg";
import {ReactComponent as AdobeInDesignIcon} from "./assets/images/svgrepo/adobe-indesign-logo-svgrepo-com.svg";

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
    "A passionate AI and Data Engineer with 8+ years of experience spanning data engineering, NLP, and AI."
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
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "At a Glance",
  subTitle: "",
  skills: [
    emoji("⚡ Design and operate batch and streaming data pipelines"),
    emoji("⚡ Design and develop Generative AI solutions"),
    emoji("⚡ Perform exploratory data analysis and data quality assessment"),
    emoji("⚡ Design and operate scalable cloud architectures")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "openai", customIcon: OpenaiIcon},
    {skillName: "databricks", customIcon: DatabricksIcon},
    {skillName: "databases", fontAwesomeClassname: "fas fa-database"},
    {skillName: "huggingface", customIcon: HuggingfaceIcon},
    {skillName: "azure", customIcon: AzureIcon},
    {skillName: "kubernetes", customIcon: KubernetesIcon},
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
const techStackMaxYears = 7;
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  subtitle: emoji(
    "📊 What and where I have been focusing on the last years 🎯  (For more details, click on the bars. ⬇️)"
  ),
  maxYears: techStackMaxYears, // Configure the maximum years scale (change this to set your desired scale)
  experience: [
    {
      Stack: "Data Engineering",
      periods: [
        {start: techStackMaxYears - 5, duration: 5} // last 5 years
      ],
      details: `I design and operate data systems that combine batch and streaming processing, primarily on Azure. 
        Data ingestion is event-driven or push/pull-based, integrating structured, semi-structured, and unstructured sources into Python-based pipelines and microservice architectures. 
        Transformations and aggregations are implemented according to use-case complexity, with storage spanning Redis, MongoDB, and PostgreSQL. 
        Monitoring and validation are handled through New Relic and automated testing to maintain reliability, scalability, and consistency across environments.`,
      icons: [
        {fontAwesomeClassname: "fab fa-python", name: "Python"},
        {customIcon: AzureIcon, name: "Azure"},
        {customIcon: PandasIcon, name: "Pandas"},
        {customIcon: PysparkIcon, name: "PySpark"},
        {customIcon: DatabricksIcon, name: "Databricks"},
        {customIcon: PostgreSQLIcon, name: "PostgreSQL"},
        {customIcon: RedisIcon, name: "Redis"},
        {customIcon: ApachekafkaIcon, name: "Apache Kafka"},
        {customIcon: MongodbIcon, name: "MongoDB"},
        {customIcon: NewrelicIcon, name: "New Relic"},
        {customIcon: PytestIcon, name: "Pytest"}
      ]
    },
    {
      Stack: "LLM Engineering & NLP/NLU",
      periods: [
        {start: 0, duration: 2}, // 2018-2020
        {start: 2, duration: 3}, // 2020-2023
        {start: 5, duration: 2} // 2023-2025
      ],
      details: `I develop Generative AI solutions focused on chatbots, prediction, summarization, and automation. My work includes agent-based systems for project management using CrewAI and LangChain, integrating open-source and SDK-based models such as OpenAI, Anthropic, and Ollama. 
        In the automotive domain, I have built multilingual NLU models (German/English) for in-car assistants covering a wide range of infotainment and control functions, including but not limited to navigation and climate settings.
        My experience spans rule-based, grammar-driven, and neural approaches (PyTorch) for intent classification and entity extraction, as well as Neural Machine Translation using sequence-to-sequence architectures like attention-based LSTMs and Transformers.`,
      icons: [
        {fontAwesomeClassname: "fab fa-python", name: "Python"},
        {customIcon: OpenaiIcon, name: "OpenAI"},
        {customIcon: AnthropicIcon, name: "Anthropic"},
        {customIcon: OllamaIcon, name: "Ollama"},
        {customIcon: SpacyIcon, name: "spaCy"},
        {customIcon: LangchainIcon, name: "LangChain"},
        {customIcon: CrewaiIcon, name: "CrewAI"},
        {customIcon: HuggingfaceIcon, name: "HuggingFace"},
        {customIcon: PytorchIcon, name: "PyTorch"},
        {customIcon: JupyterIcon, name: "Jupyter"},
        {fontAwesomeClassname: "fa-brands fa-java", name: "Java"}
      ]
    },
    {
      Stack: "Data Science and Analytics",
      periods: [
        {start: 0, duration: 1}, // 2018-2021
        {start: 4, duration: 3} // 2022-2025
      ],
      details: `I perform exploratory data analysis to assess data integrity, detect anomalies, and derive initial insights that inform downstream modeling and system design. 
        My work combines descriptive statistics, visualization, and hypothesis-driven investigation to understand data behavior and edge cases before formal pipeline integration. 
        Typical tasks include profiling large telemetry and geospatial datasets, verifying schema consistency, validating business metrics, and identifying data quality issues early in the development cycle. 
        Analyses are carried out primarily in Python using pandas, NumPy, and visualization libraries to support both ad-hoc studies and structured reporting.`,
      icons: [
        {fontAwesomeClassname: "fab fa-python", name: "Python"},
        {customIcon: PytorchIcon, name: "PyTorch"},
        {customIcon: JupyterIcon, name: "Jupyter"},
        {customIcon: NumpyIcon, name: "NumPy"},
        {customIcon: PandasIcon, name: "Pandas"},
        {customIcon: DatabricksIcon, name: "Databricks"}
      ]
    },
    {
      Stack: "Cloud and DevOps",
      periods: [
        {start: 3, duration: 4} // 2018-2022
      ],
      details: `I design, deploy, and maintain cloud-native systems on Azure and AWS, focusing on scalability, automation, and observability. 
        Infrastructure is defined as code using Bicep and Terraform to ensure reproducible, version-controlled environments. 
        Containerization with Docker and orchestration via Kubernetes enable modular, microservice-based architectures. 
        CI/CD pipelines built with GitHub Actions automate build, test, and release processes, while continuous monitoring ensures high availability and operational stability across environments.`,
      icons: [
        {customIcon: KubernetesIcon, name: "Kubernetes"},
        {fontAwesomeClassname: "fab fa-docker", name: "Docker"},
        {customIcon: AzureIcon, name: "Azure"},
        {fontAwesomeClassname: "fab fa-aws", name: "AWS"},
        {customIcon: TerraformIcon, name: "Terraform"},
        {customIcon: GithubActionsIcon, name: "GitHub Actions"}
      ]
    },
    {
      Stack: "Frontend & Design",
      periods: [
        {start: 5, duration: techStackMaxYears - 5} // 2024-2025
      ],
      details: `I’m currently exploring frontend development by creating lightweight interfaces to visualize data, test AI ideas, and prototype concepts. 
        For GenAI projects, I use Gradio and Streamlit to build quick interactive demos. When needed, I work with React, Next.js, and Tailwind CSS for responsive, maintainable UIs. 
        In my self-publishing projects, I use Canva and Adobe InDesign for layout and design, ensuring clean, consistent, and visually engaging results.`,
      icons: [
        {fontAwesomeClassname: "fab fa-react", name: "React"}, //fontAwesomeClassname: "fab fa-react"
        {customIcon: NextdotjsIcon, name: "Next.js"},
        {customIcon: TailwindcssIcon, name: "Tailwind CSS"},
        {customIcon: CanvaIcon, name: "Canva"},
        {customIcon: AdobeInDesignIcon, name: "Adobe InDesign"},
        {customIcon: GradioIcon, name: "Gradio"},
        {customIcon: StreamlitIcon, name: "Streamlit"}
      ]
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
        "📚 Built and scaled a non-fiction publishing line (~2 titles/year), achieving Amazon bestseller status through AI-assisted market research and data-driven topic validation.",
        "🚀 Designed automated workflows using LLM (agents) for content planning, ad optimization, and multilingual asset creation.",
        "🧩 Managed full publishing lifecycle—outsourcing, editing, and design—while maintaining lean, automation-based operations."
      ]
    },
    {
      role: "Senior Data Engineer",
      company: "CARIAD SE",
      companylogo: require("./assets/images/cariad_tech_logo.jpeg"),
      date: "March 2022 – Present",
      desc: "Data pipeliens, Data Science and AI Engineering",
      descBullets: [
        "🤖 Developed production-ready GenAI solutions for survey response prediction, feedback summarization and agent-based project management automation.",
        "📍 Improved positional accuracy of over 78,000 charging stations by designing and operating large-scale EV telemetry pipelines for millions of vehicles of the Volkswagen Group.",
        "📉 Significantly contributed to the migration from Databricks-Medallion architecture to Kubernetes-Microservices, achieving a reduction of operating costs by approximately 70% with increased stability of streaming pipelines.",
        "👥 Led code reviews, mentoring and knowledge sharing initiatives to ensure technical quality and prevent knowledge silos.",
        "📊 Conducted exploratory data analysis to ensure data integrity and data contract compliance; clarified anomalies in close collaboration with stakeholders."
      ]
    },
    {
      role: "NLU Software Engineer",
      company: "CARIAD SE",
      companylogo: require("./assets/images/cariad_tech_logo.jpeg"),
      date: "Dec 2018 – Feb 2022 *",
      desc: "NLU Software Engineer for Group Digital Assistant.",
      descBullets: [
        "🗣️ Improved the recognition and classification accuracy of speech utterances in vehicle assistants by developing hybrid NLU models based on context-free grammars and Machine Learning methods.",
        "🔧 Engineered Python- and Java-based toolchains to enable efficient training, evaluation and packaging of NLU models across different domains and languages.",
        "🤖 Extended assistant functions by implementing a Question-Answering module based on Azure Cognitive Services.",
        "* Supported NLU pre-development as a Work Study (Dec 2018 - Aug 2019)."
      ]
    },
    {
      role: "Several Roles",
      company: "Early Career",
      companylogo: require("./assets/images/early_career.png"),
      date: "2012 - 2018",
      desc: "Translator, Linguist and Software Engineer",
      descBullets: [
        "⚙️ At Plunet GmbH: Engineered automated integration tests for online CAT tools to ensure stable interfaces and processes as a Work Study.",
        "🌍 At think global GmbH and as a Freelancer: Performed technical translation with a focus on (machine) translation and NLP-based automation and data preparation."
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
  display: false // set to true to show this section, defaults to false
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Because growing up doesn’t mean stopping learning new cool stuff!",

  achievementsCards: [
    {
      title: "AI in Production: GenAI and Agentic AI at Scale",
      subtitle:
        "Deploy AI to AWS, GCP, Azure, Vercel with MLOps, Bedrock, SageMaker, RAG, Agents, MCP: scalable, secure and observable.",
      image: udemyLogo,
      imageAlt: "Udemy Logo",
      inProgress: true,
      duration: "4 weeks",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Course Description",
          url: "https://www.udemy.com/course/generative-and-agentic-ai-in-production/"
        }
      ]
    },
    {
      title: "LLM Engineering: Master AI, Large Language Models & Agents",
      subtitle:
        "Build and deploy 8 LLM apps, mastering Generative AI, RAG, LoRA and AI Agents.",
      image: udemyLogo,
      imageAlt: "Udemy Logo",
      duration: "6 weeks",
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
        "Overview of Agentic AI systemthat and how to enable autonomous decision-making.",
      image: linkedinLogo,
      imageAlt: "Linkedin Logo",
      duration: "few hours",
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
        "Scalable data systems with robust engineering and big data processing expertise.",
      image: courseraLogo,
      imageAlt: "Coursera Logo",
      duration: "6 weeks",
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
      duration: "6 months",
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
  title: emoji("Talks and Public Speaking 🎙️"),
  subtitle: emoji(
    "Broadcasting my lessons learned — with official permission and a shiny badge 😅"
  ),

  talks: [
    {
      title: "How AI pushed me forward (and not away)",
      subtitle: "Unicorns in Tech Summit 2025",
      slides_url:
        "https://www.linkedin.com/posts/dilettacal_what-an-inspiring-day-at-the-unicorns-in-activity-7383546764525637632-jdBK",
      slides_button_text: "Post",
      event_url: "https://www.unicornsintech.com/uits25/",
      event_button_text: "Event"
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
