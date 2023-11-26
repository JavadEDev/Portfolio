"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul
                className='list-disc pl-2'
            >
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript(ES6)</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MangoDB</li>
                <li>TailwindCSS</li>
                <li>MaterialUI</li>
                <li>BootStrap5</li>
                <li>GitHub</li>
            </ul>
        )
    },
    {
        title: "Edcation",
        id: 'education',
        content: (
            <ul
                className='list-disc pl-2'
            >
                <li>Front End Development Advanced</li>
                <li>Bachelor of Software Engineering</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul
                className='list-disc pl-2'
            >
                <li>Frontend Development from Brainnest Co.</li>
                <li>Fullstack Development Practitioner</li>
            </ul>
        )

    },
    {
        title: "Experience",
        id: 'experience',
        content: (
            <ul
                className='list-disc pl-2'
            >
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
        <section id="about" className='text-content pt-5 scroll-snap-x-center scroll-snap-y-center'>
            <article className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16'>
                <motion.div
                    animate={{
                        scale: [1, 0.5, 0.5, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "100%", "100%", "0%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: 2,
                        repeatDelay: 2
                    }}
                >
                    <Image src="/images/about-section.jpg" alt='About Section' width={500} height={500} />
                </motion.div>
                <article className='mt-4 ld:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-content mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        <TypeAnimation
                            splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
                            sequence={[
                                'As a highly motivated and enthusiastic full stack web development with a passion or creating interactive and responsive web applications. I have experience working with JavaScrip, React.js, Next.js, Node.js, Express, MangoDB, HTML5, CSS3, and GitHub. I am a quick learner and I am a team player and excited to work with others to create amazing applications.',
                                3000,
                            ]}
                            speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                            omitDeletionAnimation={true}
                            repeat={0}
                        />
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
                    <motion.div
                        className="mt-6"
                        whileHover={{ scale: 1.1, y: 10 }}
                        transition={{
                            ease: "easeIn", duration: 1,
                        }}
                    >
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </motion.div>
                </article>
            </article>
        </section>
    )
}

export default AboutSection