"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>MangoDB</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>MaterialUI</li>
                <li>BootStrap</li>
            </ul>
        )
    },
    {
        title: "Edcation",
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Front End Development Advanced</li>
                <li>University of Science and Art</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Frontend Development from Brainnest Co.</li>
                <li>Fullstack Development Practiioner</li>
            </ul>
        )

    },
    {
        title: "Experience",
        id: 'experience',
        content: (
            <ul className='list-disc pl-2'>
                <li>Frontend Freelancer</li>
                <li>IT Support/Desktop Support Engineer at 7 Years</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }


    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16'>
                <Image src="/images/about-section.jpg" alt='About Section' width={500} height={500} />
                <div className='mt-4 ld:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a full stack web development with a passion or creating interactive and responsive web applications.
                        I have experience working with JavaScrip, React, Node,js, Express, MangoDB, HTML, CSS, and GitHub.
                        I am a quick learner and I am a team player and excited to work with others to create amazing applications.
                    </p>
                    <div className='flex flex-row  flex-wrap sm:flex-nowrap justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                            Experience
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            Education
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                            Certifications
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection