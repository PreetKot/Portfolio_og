import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Preet</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          More than just a title—let’s dive deeper!
        </PageHeaderHeading>
        <div className="space-y-4 mt-4">
          <PageHeaderDescription>
            <div className="rounded-lg border-l-4 border-primary/60 bg-muted/40 p-4">
              I am a full-stack Software Engineer passionate about building scalable, responsive, and user-centric web applications. Skilled in React, Next.js, Tailwind CSS, HTML, CSS, JavaScript, MongoDB, PostgreSQL, and experienced with MERN stack development, Express.js, Firebase Auth, and ORMs, I focus on delivering clean, efficient code and seamless digital experiences. I am also expanding my expertise in cloud technologies, API development, and data science, with hands-on experience in Python, Pandas, and data visualization tools like Power BI and Excel. Alongside technical skills, I bring strong problem-solving, teamwork, leadership, and communication abilities, enabling me to create impactful and holistic software solutions.
            </div>
          </PageHeaderDescription>

          <PageHeaderDescription>
            <div className="rounded-lg border-l-4 border-primary/60 bg-muted/40 p-4">
              My approach to development is rooted in curiosity and a drive for continuous learning. I enjoy tackling real-world challenges, optimizing performance, and delivering solutions that are both functional and elegant. I believe in writing clean, maintainable code and always strive to stay ahead with the latest advancements in web development.
            </div>
          </PageHeaderDescription>

          <PageHeaderDescription>
            <div className="rounded-lg border-l-4 border-primary/60 bg-muted/40 p-4">
              Collaboration and creativity are at the heart of my work. I love working with diverse teams, mentoring peers, and contributing to projects that make a real impact. Whether it’s leading initiatives, organizing events, or engaging with tech communities, I’m committed to fostering innovation and growth—both for myself and those around me.
            </div>
          </PageHeaderDescription>

          <PageHeaderDescription>
            <div className="rounded-lg border-l-4 border-primary/60 bg-muted/40 p-4">
              I have been recognized at multiple national-level competitions for my technical skills and innovative projects. I was a finalist in the Odoo Hackathon, ranking among the top 20 teams out of 19,000+ participants, and a finalist at the Dream11 Gameathon. Additionally, I secured the second runner-up position at Abhivyakti for our research on AI-driven brain activity visualization. These accomplishments highlight my problem-solving abilities, creativity, and dedication to delivering impactful solutions.
            </div>
          </PageHeaderDescription>
        </div>
      </PageHeader>

      <CodeSnippet title="aboutMe.ts" code={code.aboutMe} />

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
