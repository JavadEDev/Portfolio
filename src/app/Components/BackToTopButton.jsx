'use client'
import { useState, useEffect } from 'react';
import IconParkOutlineToTop from '../../../public/IconParkOutlineToTop.svg'
import Image from 'next/image'
import Link from 'next/link'


const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <Link href="/"
                    onClick={scrollToTop}
                    className='p-1 right-2 bottom-2 w-full sm:w-fit rounded-md fixed z-100 cursor-pointer flex items-center content-center bg-gradient-to-br from-other-500 via-primary-500 to-secondary-500  border border-content hover:border-primary-700'
                >
                    <Image
                        src={IconParkOutlineToTop}
                        alt='IconParkOutlineToTop Icon'
                    />
                </Link>

            )}
        </>
    );
};

export default BackToTopButton;
