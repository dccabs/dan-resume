const companies = [
    {
        title: 'Principal Developer/Owner',
        name: 'Yucaba LLC',
        url: 'https://yucaba.com/',
        startDate: 'January 2021',
        endDate: 'Present',
        descripton: 'Owner and principal developer of agency that specializes in developing applications in the JAMSTACK ecosystem.',
        projects: [
            {
                title: 'Senior Front End Architect Consultant',
                company: 'DTCC',
                url: 'https://www.dtcc.com/',
                startDate: 'October 2022',
                endDate: 'January 2023',
                descripton: '·\tEvaluated current front end technology stack and recommended new modern alternatives.\n' +
                    '·\tDelivered Proof of concept with the following tech stack.\n' +
                    '•\tBuilt mock API using a postgres DB (Supabase) and NextJS serverless functions.\n' +
                    '•\tState management with Tanstack Query, and Zustand. \n' +
                    '•\tIntegrated state management with Websockets for real time data.\n' +
                    '•\tReact with examples of hooks and context.\n' +
                    '•\tMicrofrontend vs Monorepo options with module federation and webpack configuration\n' +
                    '•\tCustomized UI with Tailwind CSS\n'
            },
            {
                title: 'Senior Front End Consultant',
                company: 'Flexcar - (Avis Budget Group)',
                url: 'https://www.flexcar.com/',
                startDate: 'August 2021',
                endDate: 'July 2022',
                descripton: '·\tSeparate Front End stack into new spinoff startup application\n' +
                    '·\tBuild internal admin tools and components using React and Material UI. These tools allowed the company to process incoming rental cars and get them ready for the next user.\n' +
                    '·\tUse GPS coordinates to track different cars within the lot and process them as necessary\n'
            },
            {
                title: 'Senior Front End Consultant',
                company: 'Housecall MD',
                url: 'https://www.housecallmd.org/',
                startDate: 'August 2021',
                endDate: 'December 2022',
                descripton: '·\tBuilt entire frontend and backend application in NextJS and Tailwind\n' +
                    '·\tCreated admin console and emr tool\n' +
                    '·\tCreated SMS messaging system to communicate between patients and doctors using Twilio\n' +
                    '·\tIntegrated self hosted video chat solution\n',
            },
            {
                title: 'Senior Front End Consultant',
                company: 'Alpha MD',
                url: 'https://www.alphamd.org/',
                startDate: 'August 2021',
                endDate: 'December 2022',
                descripton: '·\tBuilt entire frontend and backend application in NextJS and Tailwind\n' +
                    '·\tAutomated email system integration\n'
            },
        ],
    },
    {
        title: 'Lead Front End Developer',
        name: 'Rightpoint (formerly TandemSeven)',
        url: 'https://rightpoint.com/',
        startDate: 'January 2020',
        endDate: 'July 2021',
        descripton: 'Lead Front End Developer for a digital agency that specializes in building enterprise applications for clients such as JP Morgan Chase, United Airlines, and Bloomberg',
        projects: [
            {
                title: 'Lead Front End Developer',
                company: 'JP Morgan Chase',
                url: 'https://www.chase.com/',
                startDate: 'December 2019',
                endDate: 'June 2021',
                descripton: '·\tBuild out components in React \n' +
                    '·\tIntegrate custom components with API endpoints\n' +
                    '·\tIntegrate state management using Redux\n' +
                    '·\tCreate custom theme and UI components based off of Material UI\n' +
                    '·\tWrite unit tests to achieve 80% coverage for UI application\n' +
                    '·\tIntegrate React UI with AEM CMS backend\n' +
                    '·\tHead developer in charge of addressing accessibility issues to achieve WCAG 2.0 and 2.1 compliance\n' +
                    '·\tWrite CSS/JSX and styling to design specifications\n' +
                    '·\tConduct code reviews in bitbucket, and help manage release process, branch management, and merging.\n'
            },
            {
                title: 'Lead Front End Developer',
                company: 'Wilmongton Trust',
                url: 'https://www.wilmingtontrust.com/',
                startDate: 'June 2019',
                endDate: 'November 2019',
                descripton: '·\tBuild out custom components for new Wilmington Trust Customer Dashboard using Angular 2.x.\n' +
                    '·\tCreate CSS component following client’s BEM CSS framework.\n' +
                    '·\tIntegrate components into API services.\n' +
                    '·\tUnit test UI components\n'
            },
            {
                title: 'Lead Front End Developer',
                company: 'United Airlines (Project 2)',
                url: 'https://www.united.com',
                startDate: 'November 2018',
                endDate: 'May 2019',
                descripton: '·\tCreate React application by created page level components, functional components\n' +
                    '·\tIntegrate React UI with api endpoints\n' +
                    '·\tTest and configure for WCAG ADA compliance\n' +
                    '·\tIntegrate Material UI components\n' +
                    '·\tIntegrate Redux state mangement',
            },
            {
                title: 'Lead Front End Architect',
                company: 'Goldman Sachs',
                url: 'https://www.goldmansachs.com/',
                startDate: 'October 2017',
                endDate: 'August 2018',
                descripton: '·\tCreate React Components for the Marcus application\n' +
                    '·\tIntegrate components with local services API and GraphQL\n' +
                    '·\tUnit test components\n' +
                    '·\tAchieve WCAG ADA compliance\n' +
                    '·\tStyle to design specs with CSS/JSX',
            },
            {
                title: 'Lead Front End Architect',
                company: 'United Airlines (Project 1)',
                url: 'https://www.united.com/',
                startDate: 'June 2016',
                endDate: 'March 2017',
                descripton: '·\tCreate React components\n' +
                    '·\tTest and configure for WCAG ADA compliance\n' +
                    '·\tWrite unit tests\n' +
                    '·\tStyle to design specs with CSS/JSX',
            },
            {
                title: 'Lead Front End Architect',
                company: 'Bloomberg',
                url: 'https://www.bloomberg.com/',
                startDate: 'October 2011',
                endDate: 'May 2016',
                descripton: '·Create protoypes of custom bloomberg components using React\n' +
                    'Worked on the Bloomberg Terminal Research and Development Team\n',
            },
        ],
    },
    {
        title: 'Senior UX Engineer',
        name: 'New York Media / New York Magazine',
        url: 'https://nymag.com/',
        startDate: 'January 2010',
        endDate: 'October 2011',
    },
    {
        title: 'Front End Technologist',
        name: 'MLB Advanced Media / MLB.com',
        url: 'https://mlb.com/',
        startDate: 'May 2004',
        endDate: 'January 2008',
    },
]

export default function Example() {
    return (
        <div className="px-6 lg:px-8 mt-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Work Experience</h2>
            {companies.map((company, index) => {
                return (
                    <div key={`company-${index}`}>
                        <div className="py-4">
                            <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">{company.title} - {company.name}</h3>
                            <p className="text-gray-500 py-2">{company.startDate} - {company.endDate}</p>
                            <p className="text-gray-500 py-2">
                                {company.descripton}
                            </p>
                        </div>
                        {company?.projects &&
                            <>
                                <h4 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mb-4">{company.name} projects</h4>
                                {company?.projects.map((project, index) => {
                                    return (
                                        <div
                                            key={`project-${index}`}
                                            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 mb-5"
                                        >
                                            <div className="min-w-0 flex-1">
                                                <a href="#" className="focus:outline-none">
                                                    <span className="absolute inset-0" aria-hidden="true" />
                                                    <p className="text-sm font-medium text-gray-900">{project.company} - {project.url}</p>
                                                    <p className="truncate text-sm text-gray-500">{project.startDate} - {project.endDate}</p>
                                                    <p className="text-sm text-gray-500">{project.descripton}</p>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                        }
                    </div>
                )
            })}
        </div>
    )
}
