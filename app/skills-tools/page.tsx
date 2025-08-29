import CodeSnippet from "@/components/code-snippet";
import { Icons } from "@/components/icons";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { Badge } from "@/components/ui/badge";
import { code } from "@/config/codeContent";
import { mySkills, mySkillsSections } from "@/constants";

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Learned by coding all night and debugging all day!
        </PageHeaderHeading>
        <PageHeaderDescription>
        As a Full-Stack Software Engineer, I specialize in designing and developing scalable, high-performance web applications using modern technologies like Next.js, React, Tailwind CSS, Node.js, and PostgreSQL. With expertise across frontend and backend, I focus on creating responsive user interfaces, efficient APIs, and robust database-driven systems while leveraging tools like Git, Vercel, and Netlify for seamless deployment and CI/CD.
        </PageHeaderDescription>
      </PageHeader>

      {/* skills and tools badges */}

      <div className="space-y-6 my-4">
        {Object.entries(mySkillsSections).map(([section, items]) => (
          <section key={section}>
            <h3 className="text-lg font-semibold mb-2">{section}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {items.map((item: any) => (
                <Badge
                  key={item.title}
                  className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
                >
                  {Icons[item.icon as keyof typeof Icons]?.({
                    className: "mr-2 size-4",
                  })}
                  {item.title}
                </Badge>
              ))}
            </div>
          </section>
        ))}
      </div>

      <CodeSnippet title="skills.ts" code={code.skillsTools} />

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};
export default SkillsToolsPage;
