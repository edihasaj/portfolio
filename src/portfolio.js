// all the properties are optional - can be left empty or deleted

const header = {
  homepage: '/portfolio',
  title: 'HOME.',
}

const about = {
  name: 'Edi Hasaj',
  role: 'Software Engineer',
  description:
    'My objective is to take a challenging and\n' +
    'managerial role in the field of computer programming and\n' +
    'implement the expertise and experience gained in this field to\n' +
    'develop complex projects with efficiency and quality.',
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/edihasaj',
    github: 'https://github.com/edihasaj',
    twitter: 'https://twitter.com/hasajedi',
  },
}

const projects = [
  {
    name: 'Kosovo - Water Information System',
    description:
      'Designed and developed a complete GIS system for \n' +
      'managing and interacting with national water data with the\n' +
      'purpose of digitizing and interacting everyday with the \n' +
      'system.',
    stack: ['C#', 'Java', 'JavaScript', 'Razor', 'jQuery'],
    sourceCode: 'https://siu.rks-gov.net',
    livePreview: 'https://siu.rks-gov.net',
  },
  {
    name: 'Drone vs Bird detection from Radar systems with Machine Learning',
    description:
      'Software solution that detects Drones or Birds from Radar systems data with high precision.',
    stack: ['Python', 'Jupyter', 'Matlab'],
    sourceCode: '#projects',
    livePreview: '#projects',
  },
  {
    name: 'Web + Mobile App for the management of goods, BI, orders and others',
    description:
      'Web and Mobile App that integrates with ERP system to manage goods, get BI related information, process orders, etc.',
    stack: ['JavaScript','React Native','React', 'C#', 'ASP.NET Core', 'Java', 'Spring Boot'],
    sourceCode: '#projects',
    livePreview: 'https://play.google.com/store/apps/details?id=com.kubitpda',
  },
  {
    name: 'Scanner CTRL Toshiba',
    description:
      'API for integration of Toshiba Hardware Scanner Control',
    stack: ['C#'],
    sourceCode: 'https://github.com/edihasaj/scanner-ctrl-toshiba',
    livePreview: '#projects',
  },
  {
    name: 'Cash Drawer Toshiba',
    description:
      'API for integration of Toshiba Hardware Cash Drawer',
    stack: ['C#'],
    sourceCode: 'https://github.com/edihasaj/cash-drawer-toshiba',
    livePreview: '#projects',
  },
  {
    name: 'Cash Display Toshiba',
    description:
      'API for integration of Toshiba Hardware Cash Display',
    stack: ['C#'],
    sourceCode: 'https://github.com/edihasaj/cash-display-toshiba',
    livePreview: '#projects',
  },
  {
    name: 'E-Farming',
    description:
      'An automated agriculture irrigation system based on IoT and cloud platform.',
    stack: ['C#', 'ASP.NET Core', 'JavaScript', 'Razor'],
    sourceCode: 'https://github.com/edihasaj/EFarming',
    livePreview: '#projects',
  },
  {
    name: 'Leaflet - Coordinate Projection',
    description:
      'Leaflet JS. MAP - Coordinate Projection of Kosovaref01. Show coordinates on mousemove in Leaflet map. ' +
      'Ability to change from different projections',
    stack: ['JavaScript'],
    sourceCode: 'https://github.com/edihasaj/leafletCoordProjection',
    livePreview: 'http://edihasaj.github.io/leaflet-coord-projection/',
  },
  {
    name: 'E-Fiscalization API',
    description:
      'API that integrates ERP fiscal sales like POS, Wholesales, etc.',
    stack: ['C#', 'ASP.NET Core'],
    sourceCode: '#projects',
    livePreview: '#projects',
  },
  {
    name: 'Crawler API for E-Fiscalization API',
    description:
      'API that gets some crucial usable information from E-fiscalization API that the API does not support offering.',
    stack: ['Python', 'Django'],
    sourceCode: 'https://github.com/edihasaj/web-crawler-efiscal-api',
    livePreview: '#projects',
  },
  {
    name: 'GeoTech for Android and iOS',
    description:
      'Application for case management.',
    stack: ['React Native', 'C#', 'ASP.NET Core'],
    sourceCode: '#projects',
    livePreview: 'https://apps.apple.com/xk/app/geotech-ks/id1592569379',
  },
  {
    name: 'ECR Datecs Blutetooth byte cmd',
    description:
      'API that returns commands in binary for communication with fiscal printers using Bluetooth.',
    stack: ['C#'],
    sourceCode: 'https://github.com/edihasaj/ecr-bluetooth',
    livePreview: '#projects',
  },
]

const skills = [
  'C#',
  'Java',
  'Swift',
  'Kotlin',
  'Dart',
  'Python',
  'VB.NET',
  'JavaScript',
  'TypeScript',
  'PHP',
  '.NET & .NET Core',
  'Spring Boot',
  'iOS',
  'Android',
  'Flutter',
  'React',
  'React Native',
  'Node.js',
  'Django',
  'Flask',
  'Express.js',
  'NextJs',
  'Laravel',
  'SQL Server',
  'PostgreSQL',
  'MySQL',
  'Redis',
  'MongoDB',
  'Apache Cassandra',
  'Couch-Base',
  'Hbase',
  'Angular',
  'Vue.js',
  'jQuery',
  'Docker',
  'SASS',
  'Git',
  'CI/CD',
  'Azure',
  'Powershell',
  'Linux',
  'Unix',
]

const contact = {
  email: 'edihasaj@outlook.com',
}

export { header, about, projects, skills, contact }
