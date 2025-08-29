export const mySkillsSections = {
  Languages: [
    { title: "C++", icon: "cpp" },
    { title: "C", icon: "c" },
    { title: "Python", icon: "python" },
    { title: "SQL", icon: "sql" },
    { title: "JavaScript", icon: "javascript" },
  ],
  Frontend: [
    { title: "HTML", icon: "html" },
    { title: "CSS", icon: "css" },
    { title: "Bootstrap", icon: "bootstrap" },
    { title: "React.js", icon: "react" },
    { title: "TypeScript", icon: "typescript" },
    { title: "Next.js", icon: "nextjs" },
    { title: "Tailwind CSS", icon: "tailwind" },
  ],
  Backend: [
    { title: "Node.js", icon: "nodejs" },
    { title: "MongoDB", icon: "mongodb" },
    { title: "Express.js", icon: "express" },
    { title: "Drizzle ORM", icon: "drizzle" },
    { title: "Prisma", icon: "prisma" },
    { title: "PostgreSQL", icon: "postgres" },
    { title: "Neon", icon: "neon" },
    { title: "APIs", icon: "api" },
  ],
  Tools: [
    { title: "Git", icon: "git" },
    { title: "GitHub", icon: "gitHub" },
    { title: "Vercel", icon: "vercel" },
    { title: "Netlify", icon: "netlify" },
    { title: "VS Code", icon: "vscode" },
  ],
  "Soft Skills": [
    { title: "Team Leadership", icon: "leadership" },
    { title: "Team Coordination", icon: "coordination" },
    { title: "Communication", icon: "communication" },
    { title: "Problem Solving", icon: "problem" },
    { title: "Time Management", icon: "time" },
    { title: "Mentoring", icon: "mentoring" },
    { title: "Collaboration", icon: "collaboration" },
    { title: "Adaptability", icon: "adaptability" },
  ],
  Other: [
    { title: "OOP", icon: "oop" },
    { title: "Data Analytics", icon: "analytics" },
    { title: "Generative AI", icon: "ai" },
    { title: "MCP", icon: "mcp" },
    { title: "Computer Networks", icon: "network" },
    { title: "CI/CD", icon: "cicd" },
  ],
};

// Flattened list for backward compatibility
export const mySkills = Object.values(mySkillsSections).flat();
