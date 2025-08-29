export const code = {
  welcome: `// app/api/welcome/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Welcome to Preet Kotmire's portfolio!" }, { status: 200 });
}
`,

  aboutMe: `const superpower = () => "Turning ideas into polished, production-ready web apps.";

const bio = {
  name: "Preet Kotmire",
  role: "Full-Stack Developer",
  focus: "Building accessible, performant, and maintainable web experiences using modern JavaScript and cloud platforms.",
  location: "Remote",
};

console.log(\`Hi, I'm \${bio.name} — \${bio.role}. \${bio.focus}\`);
console.log(\`My superpower: \${superpower()}\`);
`,

  skillsTools: `const mySkills = [
  // Languages
  "C++", "C", "Python", "SQL", "JavaScript",

  // Frontend
  "HTML", "CSS", "Bootstrap", "React.js", "TypeScript", "Next.js", "Tailwind CSS",

  // Backend
  "Node.js", "MongoDB", "Express.js", "Drizzle ORM", "Prisma", "PostgreSQL", "Neon", "APIs",

  // Tools & Platforms
  "Git", "GitHub", "Vercel", "Netlify", "VS Code",

  // Other technical skills
  "OOP", "Data Analytics", "Generative AI", "MCP", "Computer Networks", "CI/CD",

  // Soft skills
  "Team Leadership", "Team Coordination", "Communication", "Problem Solving", "Time Management", "Mentoring", "Collaboration", "Adaptability",
];

  const getSkills = () => {
  return mySkills.length > 0
    ? \`I have skills in: \${mySkills.join(", ")}! 💻🚀\`
    : "Skills not found... Panic!";
};

console.log(getSkills());
`,

  contact: `const contactDetails = {
    name: "Preet kotmire",
    email: "preet.sk18@gmail.com",
    mobile: "+91-8805110335",
    location: "Pune, Maharashtra",
    linkedIn: "https://www.linkedin.com/in/preetk18/",
    github: "https://github.com/PreetKot",
  };
  
function reachOut() {
  console.log(\`Reach out to me via email at \${contactDetails.email} or connect on LinkedIn: \${contactDetails.linkedIn}\`);
}

reachOut();
`,

  experience: `const experience = [
  {
    role: "Web Developer Intern",
    company: "Gharpan NGO",
    duration: "July 2025 - Aug 2025",
    details: "Developing an orphanage management system with secure data tracking and exports.",
  },
  {
    role: "Upcoming Summer Intern",
    company: "BNY",
    duration: "July 2026 - Aug 2026",
    details: "Selected via on-campus recruitment; focus on DSA, OOP and system design.",
  },
  {
    role: "Secretary",
    company: "GameDevUtopia",
    duration: "May 2025 - May 2026",
    details: "Managed communications, events and supported dev efforts part-time.",
  },
];

experience.forEach((job) => {
  console.log('- ' + job.role + ' at ' + job.company + ' (' + job.duration + ')');
  console.log('  ' + job.details);
});
`,

  projects: `const projects = [
  {
    title: "Droply | Modern Cloud Storage",
    slug: "Droply",
    tagline: "A secure, fast, and modern cloud storage platform for images.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL (Neon)", "Drizzle ORM"],
    links: { live: "https://droply-main-five.vercel.app", github: "https://github.com/PreetKot/Droply" },
  },
  {
    title: "QuickCourt | Real-Time Court Booking",
    slug: "QuickCourt",
    tagline: "Real-time court discovery, booking, and engagement with payments.",
    techStack: ["React", "Tailwind", "Express", "Prisma", "PostgreSQL", "Razorpay"],
    links: { live: "https://quick-court-ten.vercel.app/", github: "https://github.com/PreetKot/QuickCourt" },
  },
  {
    title: "FinTrack | AI-Powered Personal Finance",
    slug: "FinTrack",
    tagline: "Personal finance app with AI-driven insights and budgeting.",
    techStack: ["Next.js", "OpenAI", "Drizzle ORM", "NeonDB"],
    links: { live: "https://fin-track-rust.vercel.app/", github: "https://github.com/PreetKot/FinTrack" },
  },
  {
    title: "Reflect | Mindful Journaling",
    slug: "reflect",
    tagline: "A minimal journaling app for mood tracking and reflection.",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    links: { live: "https://reflect-journal-app-git-master-preet-kotmires-projects.vercel.app/", github: "https://github.com/PreetKot/Reflect-journal-app-" },
  },
  {
    title: "NYC Airbnb Listings 2024 | EDA",
    slug: "nyc-airbnb-eda",
    tagline: "Exploratory Data Analysis of NYC Airbnb listings",
    techStack: ["Python", "Pandas", "Seaborn", "Folium"],
    links: { github: "https://github.com/PreetKot/NYC-AirBNB-EDA" },
  },
];

console.log("Projects:");
projects.forEach(p => console.log('- ' + p.title + ' — ' + (p.links.github || p.links.live)));
`,

  educationJourney: `const educationJourney = {
  degrees: [
    {
      title: "Bachelors in Electronics and Telecommunication",
      institution: "Pune Institute of Computer Technology (PICT)",
      period: "Aug 2023 - June 2027",
      note: "CGPA: 9.3 / 10",
    },
    {
      title: "4.0 Technologies",
      institution: "NxtWave Disruptive Technologies",
      period: "Oct 2023 - June 2027",
      note: "Program in emerging technologies",
    },
    {
      title: "Senior Secondary Education (Science)",
      institution: "Sanjay Ghodawat International School (CBSE)",
      period: "June 2021 - June 2023",
    },
    {
      title: "Secondary Education",
      institution: "Shantiniketan School (CBSE)",
      period: "June 2016 - June 2021",
    },
  ],
};

console.log(\`My education includes:\`);
educationJourney.degrees.forEach(d => console.log(\`- \${d.title} at \${d.institution} (\${d.period})\${d.note ? ' — ' + d.note : ''}\`));
`,

  rewards: `const rewards = [
  {
    title: "Top 20 · Odoo hackathon",
    issuer: "Odoo",
    date: "2025",
    details: "Ranked in the Top 20 teams among 19,000+ participants.",
  },
  {
    title: "Second Runner Up · Abhivyakti",
    issuer: "Abhivyakti",
    date: "2025",
    details: "Secured Second Runner-Up at the National-Level Paper Presentation Competition.",
  },
  {
    title: "Finalist · Dream 11 Gameathon",
    issuer: "Dream 11",
    date: "2025",
    details: "Built an ML model to predict the best playing 11 for every match.",
  },
];

console.log('Rewards & Recognition:');
rewards.forEach(function (r) { console.log('- ' + r.title + ' — ' + r.issuer + ' (' + r.date + '): ' + r.details); });
`,
};
