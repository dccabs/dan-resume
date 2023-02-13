import {CodeBracketIcon, CodeBracketSquareIcon} from "@heroicons/react/24/outline";

const features = [
    {
        name: 'UI JAVASCRIPT FRAMEWORKS/LIBRARIES ',
        description:
            'React, Vue, Svelte, Solid JS',
    },
    {
        name: 'CSS',
        description:
            'Tailwind, CSS modules, responsive development, vanilla CSS',
    },
    {
        name: 'WEB ARCHICTURE',
        description:
            'Webpack, Module Federation, Yarn workspaces, monorepos, etc',
    },
    {
        name: 'STATE MANAGEMENT',
        description:
            'Tanstack Query, Redux, Context, Zustand, and others',
    },
    {
        name: 'SSR/SSG',
        description:
            'NextJS, Nuxt, Gatsby, serverless functions',
    },
    {
        name: 'OTHERS',
        description:
            'Node, Git, Figma, Postgres, API integrations, Photoshop, Jira, Linear.app, Webhooks, Supabase, Material UI, React Testing Library, Jest, A11Y compliance.',
    },
]

const OtherSkills =() => {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">All Skills</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        {features.map((feature, index) => (
                            <div key={`other-skill-${index}`}
                                 className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"
                        >
                                <dt className="text-sm font-medium text-gray-500">{feature.name}</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default OtherSkills;
