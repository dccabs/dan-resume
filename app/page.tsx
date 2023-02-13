"use client"

import Link from "next/link"
import Header from "@/app/components/Header";
import Banner from "@/app/components/Banner";
import FeatureSkills from "@/app/components/FeatureSkills";
import OtherSkills from "@/app/components/OtherSkills";
import WorkExperience from "@/app/components/WorkExperience";
import Education from "@/app/components/Education";

export default function Home() {
  return (
    <main>
        <Banner
            title="Hello there"
        >
            This resume was built with Next.js 13 and Tailwind CSS by Dan Cabaniss. <Link href="https://github.com/dccabs/dan-resume">See the Github repo &rarr;</Link>
        </Banner>
        <Header
            title="Dan Cabaniss"
            description="A senior front-end developer and team leader with 20 years experience working in complex and enterprise level front end applications."
        />
        <div className="bg-gray-50 py-12 md:py-24 my-12">
            <FeatureSkills
                title="Core Skills"
            />
            <OtherSkills />
        </div>
        <div>
            <WorkExperience />
        </div>
        <div className="bg-gray-50 py-12 md:py-24 my-12">
            <Education />
        </div>
    </main>
  )
}
