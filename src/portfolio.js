const header = {
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'Waleed Ahmed',
}

const about = {
  name: 'Waleed Ahmed',
  role: 'Full-Stack & Mobile App Developer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
  description:
    'Building high-quality web and mobile applications with React, React Native, Flutter, and Kotlin. Experienced in integrating REST APIs, real-time data handling, and developing scalable software solutions for restaurants, e-commerce platforms, and IoT-based systems.',
  resume: 'https://example.com', // replace with your real resume link
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
 {
  "name": "E-Gaming Marketplace",
  "description": "A secure and user-friendly platform for buying and selling eGaming accounts. Users can create listings with images and videos, authenticate safely, and handle payments seamlessly. Built with a TypeScript-enhanced MERN stack for scalability and maintainability.",
  "stack": ["MERN", "Node.js", "Express", "MongoDB", "React", "TypeScript", "CSS"],
  "sourceCode": "https://github.com/yourusername/egaming-marketplace",
  "livePreview": "https://yourprojectlive.com",
  "image": "gamway.png"
},

  // {
  //   name: 'Truck Fuel Tracker',
  //   description:
  //     'A Flutter app for managing truck fuel usage and delivery expenses. Features include expense logging, fuel tracking, report generation, and export to Excel/PDF.',
  //   stack: ['Flutter', 'Dart', 'Hive', 'Sqflite', 'Material 3'],
  //   sourceCode: 'https://github.com/yourusername/truck-fuel-tracker',
  //   livePreview: 'https://play.google.com/store/apps/details?id=truckfueltracker',
  //   image: 'cleanfolio.png',
  // },
  // {
  //   name: 'ECG Detector System',
  //   description:
  //     'Real-time ECG monitoring system using ESP32-S and AD8232 sensor. Captures heart signals, processes them, and displays ECG graphs on mobile and web dashboards.',
  //   stack: ['ESP32', 'Arduino', 'Flutter', 'Python', 'Bluetooth BLE'],
  //   sourceCode: 'https://github.com/yourusername/ecg-detector',
  //   livePreview: 'https://yourprojectlive.com/ecg',
  // },
  {
    name: 'Vision Assist – Smart Shopping App',
    description:
      'Mobile application to assist visually impaired users by identifying currency, products, and navigating stores safely using audio guidance.',
    stack: ['Flutter','Python','AI', 'Accessibility'],
    sourceCode: 'https://github.com/yourusername/vision-assist',
    livePreview: 'https://youtu.be/demo-video-link', // 👁️ demo/video is OK
    image: `EyeC.png`,
  },
  {
    name: 'Lizard Breeding Tracker',
    description:
      'Built an IoT-based mobile application to monitor and control environmental conditions for lizard breeding habitats. The app displays real-time temperature and humidity data from sensors and allows control of devices such as heating lamps, coolers, humidifiers, and dehumidifiers to maintain optimal conditions.Supports multiple sensor nodes with a simple dashboard for live status monitoring and device control.',
    stack: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    sourceCode: 'https://github.com/yourusername/lizard-breeding-app',
    livePreview: 'https://play.google.com/store/apps/details?id=lizardbreeding',
    image: 'LizardBreed.png',
  },
  {
  "name": "Plantake — Full-Stack Web Application",
  "description": "Built a full-stack web application using TypeScript, React, Node.js, Express, and MongoDB with clean, composable architecture. Implemented RESTful APIs, authentication, and state management for scalable client–server communication. Optimized performance with database indexing, efficient queries, and Dockerized deployment with CI/CD pipelines.",
  "stack": ["TypeScript", "React", "Node.js", "Express", "Docker", "Git"],
  "sourceCode": "https://github.com/yourusername/plantake",
  "livePreview": "https://plantake.com/",
  "image": null
}

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

export { header, about, projects, skills, contact }
