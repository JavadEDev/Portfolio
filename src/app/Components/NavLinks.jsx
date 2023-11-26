import React from 'react'
import Link from 'next/link'


const NavLinks = ({ href, title }) => {
    return (
        <Link
            href={href} 
            className="block py-2 pl-3 pr-4 text-accent-1 sm:text-xl rounded md:p-0 hover:text-content"
            >
            {title}
        </Link>

    )
}

export default NavLinks