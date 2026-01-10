const header = {
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'Waleed Ahmed',
}

const about = {
  name: 'Waleed Ahmed',
  role: 'Full-Stack Developer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
  description:
    'Building high-quality web and mobile applications with React/ React Native ,Vue, TypeScript, Flutter, and Kotlin. Experienced in integrating REST APIs, real-time data handling, and developing scalable software solutions for restaurants, e-commerce platforms, and IoT-based systems.',
  resume: 'https://example.com', // replace with your real resume link
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const freelanceProjects = [
  {
    name: "E-Gaming Marketplace",
    description: "A secure and user-friendly platform for buying and selling eGaming accounts. Users can create listings with images and videos, authenticate safely, and handle payments seamlessly. Built with a TypeScript-enhanced MERN stack for scalability and maintainability.",
    stack: ["MERN", "Node.js", "Express", "MongoDB", "React", "TypeScript", "CSS"],
    image: "gamway.png"
  },
  {
    name: "Lizard Breeding Tracker",
    description:
      "Built an IoT-based mobile application to monitor and control environmental conditions for lizard breeding habitats. The app displays real-time temperature and humidity data from sensors and allows control of devices such as heating lamps, coolers, humidifiers, and dehumidifiers to maintain optimal conditions. Supports multiple sensor nodes with a simple dashboard for live status monitoring and device control.",
    stack: ["React Native", "Firebase", "Redux", "Node.js"],
    image: "LizardBreed.png",
  },
  {
    name: "Plantake — Full-Stack Web Application",
    description: "Built a full-stack web application using TypeScript, React, Node.js, Express, and MongoDB with clean, composable architecture. Implemented RESTful APIs, authentication, and state management for scalable client–server communication. Optimized performance with database indexing, efficient queries, and Dockerized deployment with CI/CD pipelines.",
    stack: ["TypeScript", "React", "Node.js", "Express", "Docker", "Git"],
    image: null
  },
  {
    name: "Smart Water Tank Automation System",
    description: "Developed a water tank automation system for home water tanks in Pakistan. The system optimizes pump operation based on electricity peak and off-peak hours, displays real-time water levels, and enables controlled and efficient water pumping. Implemented hardware–software integration with sensors, motor & relay control, and automation logic.",
    stack: ["Arduino", "ESP32", "Sensors", "C/C++", "IoT", "Automation Logic"],
   
  },
  {
    name: "Tranword – Mobile Learning Game",
    description: "A mobile application built in Kotlin to help users improve vocabulary through a word-matching game. Users earn points by correctly matching words, track progress, and compete for high scores. Designed for engaging and interactive learning with smooth gameplay mechanics.",
    stack: ["Kotlin", "Android", "Mobile App Development", "Game Mechanics", "UI/UX"],
    
  },
  {
    name: "Meme Editor Application",
    description: "A Java-based desktop application that allows users to create and edit memes using text, images, and camera input. Integrated RESTful APIs for image effects and cloud storage, supporting dynamic content creation and sharing. Focused on responsive UI and smooth multimedia handling.",
    stack: ["Java", "JavaFX", "RESTful APIs", "Camera Integration", "Image Processing"],
    
  }
]

const educationalProjects = [
  {
    name: 'Vision Assist – Final Year Project',
    description:
      'Mobile application to assist visually impaired users by identifying currency, products, and navigating stores safely using audio guidance.',
    stack: ['Flutter','Python','AI', 'Accessibility'],
    image: `EyeC.png`,
  },
  {
    name: 'Arabic to Urdu Dictionary – Desktop Application',
    description:
      'An early-career project built to learn full desktop application development. JavaFX-based Arabic to Urdu dictionary with word and sentence translation, saved words, PDF generation, and dark/light themes.',
    stack: ['Java', 'JavaFX', 'SQL', 'MVC', 'Observer Pattern', 'Maven', 'Git'],
   
    image: `Dictionary.png`,
  },
  {
    name: 'Search Engine Desktop App – Data Structures Project',
    description:
      'Early-stage academic project to apply data structures in real applications. .NET C# desktop search engine with AVL-tree optimized search, prefix-based suggestions using Trie, search ranking with priority queue, and recent search history management.',
    stack: ['C#', '.NET', 'Data Structures', 'AVL Trees', 'Trie', 'Priority Queue', 'Hash Tables'],
    
  },
  {
    name: 'Ludo Game – C++ SFML Project',
    description:
      'A learning project to understand programming fundamentals and game development using C++. Developed a desktop Ludo game with graphical interface, player turns, dice mechanics, and basic AI for computer opponents using SFML library.',
    stack: ['C++', 'SFML', 'Game Development', 'OOP', 'AI'],
   
  
  },
]


const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Flutter',
  'Redux',
  'Node.js',
  'Express',
  'MongoDB',
  'SQL',
  'Kotlin',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
  'BLE Communication',
  'IoT Development',
  'Firebase',
  'Python',
]

const contact = {
  email: 'waleed.mtech@gmail.com',
}

export { header, about, freelanceProjects, educationalProjects, skills, contact }
