import React from 'react'
import Navlink from './Navlink'

const MenuOverly = ({ Links }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {Links.map((link, index) => (
                <li key={index}>
                    <Navlink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    )
}

export default MenuOverly