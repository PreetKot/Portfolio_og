import CodeSnippet from "@/components/code-snippet";
import { PageActions } from "@/components/page-header";
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PageHeader } from "@/components/page-header";
import Pager from "@/components/pager";
import { Button } from "@/components/ui/button";
import { code } from "@/config/codeContent";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Preet Kotmire</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Crafting code by day, cracking challenges by night.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a full-stack Software Engineer passionate about building scalable, responsive, and user-centric web applications. Skilled in React, Next.js, Tailwind CSS, HTML, CSS, JavaScript, MongoDB, PostgreSQL, and experienced with MERN stack development, Express.js, Firebase Auth, and ORMs, I focus on delivering clean, efficient code and seamless digital experiences. I am also expanding my expertise in cloud technologies, API development, and data science, with hands-on experience in Python, Pandas, and data visualization tools like Power BI and Excel. Alongside technical skills, I bring strong problem-solving, teamwork, leadership, and communication abilities, enabling me to create impactful and holistic software solutions.

        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href="/PreetKotmireResume.pdf" target="_blank" rel="noopener noreferrer">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <CodeSnippet title="welcome.ts" code={code.welcome} />

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
