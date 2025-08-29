import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCard } from "@/components/ui/hover-card";
import { code } from "@/config/codeContent";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          I’ve gained valuable knowledge, but the real learning happens when I’m deep in the code editor, turning concepts into working solutions.
        </PageHeaderHeading>
        <PageHeaderDescription>
          My academic journey has been a launchpad into technology, where each step has strengthened my curiosity and skills. At Pune Institute of Computer Technology, I am pursuing Electronics & Telecommunication Engineering, building a strong foundation in core engineering concepts while bridging them with computer science and modern software practices.
        </PageHeaderDescription>

        <PageHeaderDescription>
          My academic journey has been enriched by hands-on projects and rigorous coursework, allowing me to develop practical skills and gain a deeper understanding of modern technological solutions.
        </PageHeaderDescription>
      </PageHeader>

      <ol className="relative mb-10 border-gray-200 border-s dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Bachelors in Electronics and Telecommunication · Pune Institute of Computer Technology 
            
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Aug. 2023 - June 2027
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            I am pursuing a Bachelor’s in Electronics & Telecommunication Engineering at Pune Institute of Computer Technology (PICT), with a strong focus on programming, web development, and software engineering.
          </p>
         <p className="mb-4 text-base font-medium text-gray-700 dark:text-gray-300">
  CGPA: 9.3 / 10
</p>
           <p className="mb-4 text-base font-medium text-gray-700 dark:text-gray-300">
  Extra-Curricular: Secretary | GameDevUtopia , Student Council | Entrepreneurship Development Cell
</p>

          
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            4.0 Technologies · NxtWave Disruptive Technologies
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
              Latest
          </span>
          </h3>
          
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Oct. 2023 - June 2027
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            I am currently enrolled in the 4.0 Technologies program at NxtWave Disruptive Technologies, where I am enhancing my skills in emerging technologies and their applications.
          </p>
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Senior Secondary Education · Sanjay Ghodawat International School · CBSE
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2021 - June 2023
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            I completed my senior secondary education in Science from Sanjay Ghodawat International School, where I excelled in my studies and developed a strong foundation in core subjects like PCM and prepared for competitive exams like JEE, MHTCET, COMEDK etc.
          </p>
          <p className="mb-4 text-base font-medium text-gray-700 dark:text-gray-300">
  Score : 80%
</p>
        </li>
         <li className="ms-6 mt-8">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Secondary Education · Shantiniketan School · CBSE
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2016 - June 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            I completed my secondary education at Shantiniketan School, where I built a solid academic foundation and consistently performed well in my studies. During this time, I actively focused on core subjects and cultivated the discipline and curiosity that shaped my interest in pursuing higher education in Science and Technology.
          </p>
          <p className="mb-4 text-base font-medium text-gray-700 dark:text-gray-300">
  Extra-Curricular: Cricket | Fast Bowler , Music | Guitar & Piano
        </p>
        <p className="mb-4 text-base font-medium text-gray-700 dark:text-gray-300">
  Score : 94.6%
</p>
      </li>
      </ol>

      <CodeSnippet code={code.educationJourney} title="educationJourney.ts" />

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;
