"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';


const atstart = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 1
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <motion.ul
                className='list-disc pl-2'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    ease: "easeOut", duration: 1.3,
                }}
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
            </motion.ul>
        )
    },
    {
        title: "Edcation",
        id: 'education',
        content: (
            <motion.ul
                className='list-disc pl-2'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    ease: "easeOut", duration: 1,
                }}
            >
                <li>Front End Development Advanced</li>
                <li>Bachelor of Software Engineering</li>
            </motion.ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <motion.ul
                className='list-disc pl-2'
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{
                    ease: "easeIn", duration: 0.5,
                }}
            >
                <li>Frontend Development from Brainnest Co.</li>
                <li>Fullstack Development Practitioner</li>
            </motion.ul>
        )

    },
    {
        title: "Experience",
        id: 'experience',
        content: (
            <motion.ul
                className='list-disc pl-2'
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    ease: "easeIn", duration: 0.7,
                }}
            >
                <li>Frontend Freelancer</li>
                <li>IT Support/Desktop Support Engineer at 7 Years</li>
            </motion.ul>
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
        <section id="about" className='text-white pt-5 scroll-snap-x-center scroll-snap-y-center'>
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
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        <TypeAnimation
                            splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
                            sequence={[
                                'As a highly motivated and enthusiastic full stack web development with a passion or creating interactive and responsive web applications. I have experience working with JavaScrip(ES6), React.js, Next.js, Node.js, Express, MangoDB, HTML5, CSS3, and GitHub. I am a quick learner and I am a team player and excited to work with others to create amazing applications.',
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
                    <div
                        className="mt-6"
                    >
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </article>
            </article>
        </section>
    )
}

export default AboutSection