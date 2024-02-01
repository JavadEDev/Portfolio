"use client"
import React from 'react'
import { motion } from "framer-motion"

const achievementList = [
    {
        metric: "Projects",
        value: '20',
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Connection",
        value: "200",
    },
    {
        metric: "Awards",
        value: "3",
    },
    {
        metric: "Years",
        value: "2",
        postfix: "+",
    }
]

const AchievementsSection = () => {
    return (
        <section className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 snap-center'>
            <article className='border-border-1 border rounded-md py-8 px-16 flex flex-col sm:flex-row  item-center justify-between snap-center'>
                {achievementList.map((achievement, index) => {
                    return (
                        <article
                            key={index}
                            className='flex flex-col items-center justify-center mx-4'
                        >
                            <motion.h2
                                whileHover={{ scale: 2 }}
                                className='text-content text-4xl font-bold flex flex-row'>
                                {achievement.prefix}
                                {achievement.value}
                                {achievement.postfix}
                            </motion.h2>
                            <p className='text-accent-1 text-base'>
                                {achievement.metric}
                            </p>
                        </article>
                    )
                })}
            </article>
        </section>
    )
}

export default AchievementsSection