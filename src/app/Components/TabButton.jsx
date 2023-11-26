import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
}

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-content text-lg' : 'text-sm text-accent-1 '
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-content ${buttonClasses}`} >
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className='h-1 bg-primary-500 mt-1 mr-3'
                transition={{ duration: 0.5}}
            >
            </motion.div>
        </button>
    )
}

export default TabButton