export const portfolioSettings = {
  titleBarTag: "github.com/RRyanDEV - Visual Studio Code",
  repoLocation: "https://github.com/RRyanDEV/portfolio-vscode",
  useTitleTag: false,
  projectName: "RRyanDEV",
  devName: "RRyanDEV",
  devDescription: "Web Front-End Developer",
  contentGithub: {
    enabled: true,
    limitRepos: 6,
    calendarTheme: {
      light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
      dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
    },
  },
  contentProjects: {
    enabled: false,
    projects: [
      {
        id: 1,
        name: "Driwwwle",
        image: "https://imgur.com/kbGs6zH.png",
        description: "A platform for web developers to showcase their projects",
        tags: ["next", "node", "mongodb", "tailwind", "react-query"],
        source_code: "https://github.com/itsnitinr/driwwwle-v2",
        demo: "https://driwwwle.com/",
      },
      {
        id: 2,
        name: "PCB Cupid",
        image: "https://imgur.com/tAZotn3.png",
        description: "E-commerce website for a PCB manufacturing company",
        tags: ["react", "node", "mongodb", "redux", "razorpay", "material-ui"],
        demo: "https://www.pcbcupid.com/",
      },
      {
        id: 3,
        name: "HealthyWays",
        image: "https://imgur.com/8FFqaX8.png",
        description:
          "A food ordering platform for healthy and home-cooked meals",
        tags: ["react", "node", "mongodb", "redux", "razorpay", "material-ui"],
        source_code: "https://github.com/itsnitinr/healthyways",
        demo: "https://healthyways.herokuapp.com/",
      },
      {
        id: 4,
        name: "VSCode Portfolio",
        image: "https://imgur.com/mKkz0iz.png",
        description:
          "A themeable and developer-centric portfolio based on the VSCode",
        tags: ["next", "css-modules"],
        source_code: "https://github.com/itsnitinr/vscode-portfolio",
        demo: "http://vscode-portfolio.vercel.app/",
      },
    ],
  },
  contentArticles: {
    enabled: false,
    devtoProfileUrl: "https://dev.to/itsnitinr",
  },
  contentContact: {
    enabled: true,
    showContactForm: false,
    socials: [
      {
        social: "email",
        link: "ryaanreeal@outlook.com",
        href: "mailto:ryaanreeal@outlook.com",
      },
      {
        social: "github",
        link: "RRyanDEV",
        href: "https://github.com/RRyanDEV",
      },
      {
        social: "linkedin",
        link: "Ryan Gomes Marques Romão",
        href: "https://www.linkedin.com/in/rryandev/",
      },
      {
        social: "telegram",
        link: "Ryan Gomes",
        href: "https://t.me/ryaanreeal",
      },
    ],
  },
  headMetadata: {
    titleTag: "VSCode - Portfólio de Ryan Gomes",
    description:
      "",
    keywords:
      "",
  },
};
