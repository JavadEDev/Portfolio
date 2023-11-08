import React from 'react'
import Link from 'next/link'


const Navlink = ({ href, title }) => {
    return (
        <Link
            href={href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
            {title}
        </Link>

    )
}

export default Navlink