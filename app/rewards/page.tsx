import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const RewardsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Rewards & Recognition</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Recognitions and awards earned during my academic and hackathon journey.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I’ve been fortunate to receive several awards and recognitions for projects and academic performance. These honors reflect focused effort, teamwork, and an appetite for building useful solutions.
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
              <path d="M10 2l2 5 5 .5-4 3 1.5 5L10 13l-4.5 3L7 10 3 7.5 8 7z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Second Runner Up · Abhivyakti
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Feb. 2025
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Secured Second Runner-Up at the National-Level Paper Presentation Competition for research on Neural Image Synthesis.
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
              <path d="M10 2l2 5 5 .5-4 3 1.5 5L10 13l-4.5 3L7 10 3 7.5 8 7z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Top 20 · Odoo hackathon
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2025
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Ranked in the Top 20 teams among 19,000+ participants. Developed a real-time court booking system.
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
              <path d="M10 2l2 5 5 .5-4 3 1.5 5L10 13l-4.5 3L7 10 3 7.5 8 7z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
             Finalist · Dream 11 Gameathon
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2025
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Built an ML model to predict the best playing 11 for every match and get the maximum fantasy points.
          </p>
        </li>
      </ol>

      <CodeSnippet code={code.rewards} title="rewards.ts" />

      <Pager
        prevHref="/education"
        nextHref="/contact"
        prevTitle="Education"
        nextTitle="Contact"
      />
    </>
  );
};
export default RewardsPage;
