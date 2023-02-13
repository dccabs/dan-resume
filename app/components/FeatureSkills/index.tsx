import {CodeBracketIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline'
import * as React from "react";

const features = [
    {
        name: 'Tailwind CSS',
        description:
            'Expert level knowledge of Tailwind CSS. I believe it brings a much needed level of standardization to UI Layouts and styling',
        icon: CodeBracketSquareIcon,
    },
    {
        name: 'NextJS',
        description:
            'Expert level knowledge of NextJS. Server side rendering, static site generation, integrating APIs, serverless functions, and edge functions',
        icon: CodeBracketIcon,
    },
    {
        name: 'React',
        description:
            'Several years of experience building enterprise applications with React including hooks, context, and other lifecycle methods',
        icon: CodeBracketIcon,
    },
    {
        name: 'State Management',
        description:
            'Tanstack Query, Redux, Zustand, and other state management libraries',
        icon: CodeBracketSquareIcon,
    },
]

interface FeatureProps {
    title: string
}

interface Feature {
    name: string
    description: string
    icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
}


const Feature = (props: FeatureProps) => {
    const { title } = props
    return (
        <div className="py-0 sm:py-0">
            <div className="px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-12 lg:mx-0 lg:max-w-none ">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        {title}
                    </h2>
                    <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                        {features.map((feature: Feature) => (
                            <div key={feature.name}>
                                <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center mb-6">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 mr-4">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Feature
