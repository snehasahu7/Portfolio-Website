import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project8.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";



export const HERO_CONTENT = `I’m a final year BTech student at BIT Mesra. I am a Web developer and a Competitive programmer. I’ve honed my skills in React, Node.js, MySQL, PostgreSQL, and MongoDB, aiming to create innovative solutions that drive growth and deliver great user experiences.

I have hands-on experience with RESTful APIs, user authentication, and database management.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, Express.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Agrix Website",
    image: project5,
    description:
      "Developed the company website from scratch, focusing on a clean UI, responsive design, and seamless user experience.",
    technologies: ["React", "Express.js","Node.js","Nodemailer","Selenium"],

  },
  {
    title: "Food Ordering Website",
    image: project6,
    description:
      "Engineered a full-stack food ordering platform, supporting 200+ concurrent users with real-time cart and order functionalities.",
    technologies: ["Express.js", "React", "Node.js", "MongoDB","CSS"],
  },
  {
    title: "Zhub Store",
    image: project2,
    description:
      "Implemented fully functional prototype for trend-centric identification and platform engagement project for Myntra HackerRamp, selected from approximately 10,000 teams.",
    technologies: ["EJS", "CSS", "Node.js", "Express.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["CSS", "React", "Bootstrap"],
  },
  {
    title: "MindMate",
    image: project7,
    description:
      "Built a full-stack wellness platform enabling mood logging, emotional trend visualization, and AI-powered mental health chatbot interaction.",
    technologies: ["SQLite","GeminiAPI","React","Flask"]
    
  },
  {
    title: "Heart Diesease Predictor",
    image: project4,
    description:
      "Developed a Heart Disease Predictor using Python by integrating basic neural network concepts and applying basic neural network concepts to classify heart disease risks accurately.",
    technologies: ["Numpy", "Pandas", "Matplotlib"],
  },
];

export const CONTACT = {
  address: "Birla Institute of Technology Mesra, Patna campus, Bihar-800014 ",
  phoneNo: "8102973759",
  email: "snehasahu990@gmail.com",
};
