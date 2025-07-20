// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import schoolLogo from './assets/education_logo/school.jpeg';
import CloudinaryLogo from './assets/tech_logo/cloudinary.png';

const appwriteLogo = "https://appwrite.io/images/logos/logo.svg";




// Project Section Logo's

import projectLogo from './assets/work_logo/project1.png';
import project2Logo from './assets/work_logo/project2.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },,
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
        { name: 'SASS', logo: sassLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
       { name: 'Cloudinary', logo: CloudinaryLogo },
      { name: 'Appwrite', logo: appwriteLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
       { name: 'JavaScript', logo: javascriptLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
     
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
   
  ];
  
  export const education = [

    {
      id: 1,
      img: "https://uem.edu.in/app/themes/iem-group-new-wp-theme/resources/images/UEM-Logo.png",
      school: "University of Engineering & Management Jaipur",
      date: "Sept 2023 - April 2026",
      grade: "8.59 CGPA",
      desc: "I completed my Bachelor's degree in Computer Application (BCA) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at UEM Jaipur allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Applications - BCA",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "Mahatma Gandhi International School SriMadhopur, Sikar",
      date: "Apr 2020 - March 2021",
      grade: "69%",
      desc: "I completed my class 12 education from Mahatma Gandhi International School SriMadhopur, Sikar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 3,
      img: schoolLogo,
      school: "Mahatma Gandhi International School SriMadhopur, Sikar",
      date: "Apr 2018 - March 2019",
      grade: "73%",
      desc: "I completed my class 10 education from Mahatma Gandhi International School SriMadhopur, Sikar, under the CBSE board.",
      degree: "CBSE(X) - Class 10",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Ket Se - Organic Farming Platform",
      description:
        "Khet Se is a full-stack (in progress......) platform that connects farmers directly with customers to deliver fresh, organic produce without middlemen. The platform empowers farmers to list their harvest, manage orders, and receive fair prices, while customers enjoy affordable, farm-fresh goods delivered straight to their doorstep.",
      image: project2Logo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Still in Development"],
      github: "https://github.com/Rohit-jat/-KhetSe",
      webapp: "https://khet-se.vercel.app/",
    },
    {
      id: 1,
      title: "Room Dheko - Room Rental Platform",
      description:
        "Room Dheko is a full-stack platform designed to help students and job seekers find affordable rental rooms in new cities. The platform allows users to browse verified listings, search using smart filters, and connect directly with landlords—making the room-hunting experience faster, safer, and more personalized.",
      image: projectLogo,
      tags: [ "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Full Stack"],
      github: "https://github.com/Rohit-jat/Room-Dheko",
      webapp: "https://room-dekho-bwxj.onrender.com/",
    },
 
  ];  