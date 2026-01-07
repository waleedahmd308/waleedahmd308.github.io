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
    name: 'eGaming Marketplace',
    description:
      'A platform for buying and selling eGaming accounts. Users can post account listings with images and videos, authenticate securely, and handle payments seamlessly.',
    stack: ['MERN', 'Node.js', 'Express', 'MongoDB', 'React', 'CSS'],
    sourceCode: 'https://github.com/yourusername/egaming-marketplace',
    livePreview: 'https://yourprojectlive.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Truck Fuel Tracker',
    description:
      'A Flutter app for managing truck fuel usage and delivery expenses. Features include expense logging, fuel tracking, report generation, and export to Excel/PDF.',
    stack: ['Flutter', 'Dart', 'Hive', 'Sqflite', 'Material 3'],
    sourceCode: 'https://github.com/yourusername/truck-fuel-tracker',
    livePreview: 'https://play.google.com/store/apps/details?id=truckfueltracker',
    image: 'cleanfolio.png',
  },
  {
    name: 'ECG Detector System',
    description:
      'Real-time ECG monitoring system using ESP32-S and AD8232 sensor. Captures heart signals, processes them, and displays ECG graphs on mobile and web dashboards.',
    stack: ['ESP32', 'Arduino', 'Flutter', 'Python', 'Bluetooth BLE'],
    sourceCode: 'https://github.com/yourusername/ecg-detector',
    livePreview: 'https://yourprojectlive.com/ecg',
  },
  {
    name: 'Lizard Breeding Tracker',
    description:
      'A cross-platform mobile app to manage lizard breeding, track breeding cycles, and store health logs. Integrated secure authentication and intuitive UX.',
    stack: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    sourceCode: 'https://github.com/yourusername/lizard-breeding-app',
    livePreview: 'https://play.google.com/store/apps/details?id=lizardbreeding',
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

export { header, about, projects, skills, contact }
