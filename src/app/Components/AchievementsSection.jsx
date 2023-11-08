"use client"
import React from 'react'
import { motion } from "framer-motion"

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
});

const achievementList = [
    {
        metric: "Projects",
        value: '30',
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100,000",
    },
    {
        metric: "Awards",
        value: "5",
    },
    {
        metric: "Years",
        value: "2",
        postfix: "+",
    }
]

const AchievementsSection = () => {
    const [num, setNum] = React.useState(331231);
    return (
        <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='border-[#33353F] border rounded-md py-8 px-16 flex flex-col sm:flex-row  item-center justify-between'>
                {achievementList.map((achievement, index) => {
                    return (
                        <div
                            key={index}
                            className='flex flex-col items-center justify-center mx-4'
                        >
                            <motion.h2
                                whileHover={{ scale: 2 }}
                                className='text-white text-4xl font-bold flex flex-row'>
                                {achievement.prefix}
                                {achievement.value}
                                {achievement.postfix}
                            </motion.h2>
                            <p className='text-[#ADB7BE] text-base'>
                                {achievement.metric}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default AchievementsSection