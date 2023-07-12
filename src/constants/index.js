import {
  snapbrillia,
  isac,
  wellsfargo,
  nitk,
  ecell,
  voting,
  vehicle,
  hostel,
  baja,
  acm,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiOpencv,
  SiDjango,
  SiSqlite,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiC,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiJsonwebtokens,
  SiBitbucket,
  SiClickup,
  SiConfluence,
  SiJira,
  SiFlask,
  SiKeras,
  SiScikitlearn
} from "react-icons/si";

import {
  FaHardHat
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import { DiCss3, DiJava} from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1wkPu9i_e2uAdHmbqe0hEM9BfBheJfxkT/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/beingrishijain";

export const navLinks = [
  
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "National Institute of Technology Karnataka, Surathkal",
    degree: "Bachelor of Technology",
    duration: "December 2020 - Present",
    content1: "Major: Information Technology",
    content2: "Minor: School of Management",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-4",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-7",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-8",
        icon: SiSolidity,
        name: "Solidity",
      },
      {
        id: "pl-9",
        icon: DiJava,
        name: "Java",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiExpress,
        name: "ExpressJs",
      },
      {
        id: "f-7",
        icon: SiFlask,
        name: "Flask",
      },
      {
        id: "f-8",
        icon: SiKeras,
        name: "Keras",
      },
      {
        id: "f-9",
        icon: SiScikitlearn,
        name: "Scikitlearn",
      },
      
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: SiClickup,
        name: "Clickup",
      },
      {
        id: "t-7",
        icon: SiBitbucket,
        name: "BitBucket",
      },
      {
        id: "t-8",
        icon: SiConfluence,
        name: "Confluence ",
      },
      {
        id: "t-9",
        icon: SiJira,
        name: "Jira",
      },
      {
        id: "t-10",
        icon: SiMongodb,
        name: "MongoDb",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Wells fargo, India",
    logo: wellsfargo,
    link: "https://www.wellsfargo.com/",
    positions: [
      {
        title: "Intern Analyst",
        duration: "May 2023 - Jul 2023",
        content: [
          {
            text: "Worked as part of Consumer Lending Business Unit under Consumer Technology line of business.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Snapbrillia, San Francisco",
    logo: snapbrillia,
    link: "https://www.snapbrillia.com/",
    positions: [
      {
        title: "Data Science Intern",
        duration: "Oct 2022 - Mar 2023",
        content: [
          {
            text: "Worked with Data science team to build the Recommendation system for the product.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Information Sharing and Analysis Centre",
    logo: isac,
    link: "https://www.wellsfargo.com/",
    positions: [
      {
        title: "CyberSecurity Intern",
        duration: "Jul 2021 - Oct 2021",
        content: [
          {
            text: "Worked with team to find vulnerability in power sector websites and make report how to resolve it.",
            link: "",
          },
        ],
      },
    ],
  },
  
  
  
];


export const projects = [
  {
    id: "project-1",
    title: "Election Voting System",
    github: "https://github.com/rishijain07/Voting-System",
    link: "",
    image: voting,
    content:
      "Built A system for voting using JAVA language. Made a GUI interface where all voting interfaces, Candidate registration and Aadhar PDF generator. Results of voting were generated in PDF ",
    stack: [
      {
        id: "icon-1",
        icon: DiJava,
        name: "Java"
      },
      {
        id: "icon-2",
        icon: DiJava,
        name: "JfreeChart Library"
      },
      {
        id: "icon-3",
        icon: DiJava,
        name: "iTextPDf Library"
      },
    ],
  },
  {
    id: "project-2",
    title: "Recognition-of-Vehicle-Number-Plate",
    github: "https://github.com/rishijain07/Recognition-of-Vehicle-Number-Plate",
    link: "",
    image: vehicle,
    content:
      "Built a system using Python for a resident apartment where it will recognize whether the vehicle belongs to the apartment resident or not. The system stores the vehicle number using image recognition and Pytesseract OCR.",
    stack: [
      {
        id: "icon-1",
        icon: SiOpencv,
        name: "OpenCV"
      },
      {
        id: "icon-2",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-3",
        icon: SiPython,
        name: "Pytesseract OCR"
      },
    ],
  },
  {
    id: "project-3",
    title: "Hostel Management",
    github: "https://github.com/rishijain07/Hostel-Management",
    link: "",
    image: hostel,
    content:
      "Built a Website where admin can manage all student’s hostel rooms details and also admin can update the details. Admin can track all cleaning requests and complaints given by students, and It also manages the data of staff members",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: SiExpress,
        name: "ExpressJs"
      },
      {
        id: "icon-4",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-5",
        icon: SiNodedotjs,
        name: "NodeJs"
      },
      {
        id: "icon-5",
        icon: SiJsonwebtokens,
        name: "JWT"
      },

      
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "ACM, NITK",
    title: "Technical Secretary",
    duration: "September 2021 - Present",
    content: [
      {
        text: " Organised and successfully conducted events for the students of the college. Conducted and Delivered a Summer Mentorship program on Graph Theory, reaching over 50 students. Worked on a year-long project in the Club and worked with ACM-W WebTeam in building the ACM-W website",
        link: "https://nitk.acm.org/#/",
      },
    ],
    logo: acm,
  },
  {
    organisation: "BAJA NITK Racinhg, NITK",
    title: "Joint Marketing Head",
    duration: "July 2021 - Present",
    content: [
      {
        text: " Work on bringing sponsors for the Team. Participated in the business event at the national level event. Design Posts and Poster for the official Social Media handles of the Team.",
        link: "",
      }
    ],
    logo: baja,
  },
  {
    organisation: "E-Cell, NITK",
    title: "Executive Member,Ex-Media Manager",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Managing all Media and publicity work of the club. Organised Entrepreneur & Business Event in Technical Fest of the college ”Engineer 2022” and successfully organised Entrepreneur-related events for juniors in the College. Managed all Marketing related work for the flagship event of the Club called ”E-Summit” and brought sponsors for the event.",
        link: "",
      }
    ],
    logo: ecell,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/beingrishijain",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/rishijain07",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:beingrishijain@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/whenyoumetrishi",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/beingrishijain",
  },
];

export const aboutMe = {
    name: "Rishi P Jain",
    tagLine: "Intern Analyst @ Wells fargo | Technical Seceretary @ ACM, NITK | Marketing Head @ BAJA NITK Racing, NITK ",
    intro: "Passionate Student web developer from India, immersed in the art of coding, crafting digital wonders or lost in the vast ocean of ideas, seeking the next wave of innovation."
}
