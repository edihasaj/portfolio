// all the properties are optional - can be left empty or deleted

const header = {
  homepage: '/',
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
    stack: ['C#', 'Java', 'JavaScript', 'Razor'],
    sourceCode: 'https://siu.rks-gov.net',
    livePreview: 'https://siu.rks-gov.net',
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
    name: 'Drone vs Bird detection from Radar systems with Machine Learning',
    description:
      'Software solution that detects Drones or Birds from Radar systems data with high precision.',
    stack: ['Python', 'Matlab'],
    sourceCode: '#projects',
    livePreview: '#projects',
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
    name: 'E-Fiscalization API',
    description:
      'API that integrates ERP fiscal sales like POS, Wholesales, etc.',
    stack: ['C#', 'ASP.NET Core'],
    sourceCode: '#projects',
    livePreview: '#projects',
  },
]

const skills = [
  'C#',
  'Java',
  'Dart',
  'Python',
  'VB.NET',
  'JavaScript',
  'TypeScript',
  'PHP',
  '.NET & .NET Core',
  'Spring Boot',
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
  'MongoDB',
  'Redis',
  'Angular',
  'Vue.js',
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
