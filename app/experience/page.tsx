import CodeSnippet from "@/components/code-snippet"
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from "@/components/page-header"
import Pager from "@/components/pager"
import { code } from "@/config/codeContent"

const ExperiencePage = () => {
    return (
        <>
            <PageHeader className="mb-10">
                <PageHeaderHeading>Experience</PageHeaderHeading>
                <PageHeaderHeading className="mt-2 text-muted-foreground">
                    you need experience to get a job, but you need a job to get experience.
                </PageHeaderHeading>
                <PageHeaderDescription>
                    Throughout my journey as a developer, I’ve worked with cutting-edge technologies while mastering the fine art of debugging at 2 AM. From building dynamic web applications to untangling cryptic error logs, my experience has blended structured learning with spontaneous problem-solving. Every project, hackathon, and internship has honed my ability to write clean, scalable code, collaborate effectively, and—most importantly—fix bugs before they fix me.
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
                        Web Developer Intern · Gharpan NGO
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                            Latest
                        </span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        July. 2025 - Aug. 2025
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Developing a scalable orphanage management system for Gharpan NGO, featuring secure data tracking, workflow automation, and Excel/PDF exports — streamlining operations and reducing manual workload by 50%.
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
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Upcoming Summer Intern · BNY
                        {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
              Latest
            </span> */}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        July. 2026 - Aug. 2026
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Selected in top 1% candidates through on-campus recruitment, excelling in DSA, OOP and SYSTEM DESIGN.
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
                        Secretary · GameDevUtopia
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        May. 2025 - May. 2026
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Working as a part-time Secretary at GameDevUtopia,
                        where I manage communications, organize events, and
                        support the development team while honing my attention to
                        detail and time management skills.
                    </p>
                </li>
            </ol>

            <CodeSnippet code={code.experience} title="experience.ts" />

            <Pager
                prevHref="/skills-tools"
                nextHref="/education"
                prevTitle="Skills & Tools"
                nextTitle="Education"
            />
        </>
    )
}
export default ExperiencePage
