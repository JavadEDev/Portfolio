"use client";
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from '../../../public/github-64.svg'
import LinkedinIcon from '../../../public/linkedin-64.svg'
import Map from '../Components/Map'


const EmailSection = () => {
    const [showMessage, setShowMessage] = useState(false);
    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('service_b4kzulj', 'template_uv36o6w', ref.current, 'rBUnSeJxIxJB8JF3f')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
            }, (error) => {
                console.log(error.text);
                setSuccess(false);
            });

        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 5000);
    };

    useEffect(() => {
        if (showMessage) {
            setTimeout(() => {
                setShowMessage(false);
            }, 5000);
        }
    }, [showMessage]);


    return (
        <section id='contact' className='grid md:grid-cols-2 px-8 my-12 md:my-12 py-24 gap-4 relative'>
            <article className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500 to-transparent h-full w-full z-0 absolute '>
                <Map />
            </article>
            <article className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>
                    Let`&apos;s Connect
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best
                    to get back to you!
                </p>
                <div className='socials flex flex-row gap-2 '>
                    <Link href="github.com">
                        <Image
                            src={GithubIcon}
                            alt='Github Icon'
                        />
                    </Link>
                    <Link href="linkedin.com">
                        <Image
                            src={LinkedinIcon}
                            alt='linkedin Icon'
                        />
                    </Link>
                </div>
            </article>
            <article className='z-10'>
                <form ref={ref} className='flex flex-col' onSubmit={handleSubmit} >
                    <div className='mb-6'>
                        <label htmlFor="email" itemType='email' className='text-white block mb-2 text-sm font-medium '>
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '
                            required
                            placeholder='YourEmail@domain.com'
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" itemType='text' className='text-white block mb-2 text-sm font-medium'>
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '
                            required
                            placeholder='Just saying Hi'
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" itemType='text' className='text-white block mb-2 text-sm font-medium'>
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 '
                            required
                            placeholder="Let's talk about ..."
                        />
                    </div>
                    <button
                        type="submit"
                        className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '
                    >
                        Send Message
                    </button>
                    {
                        //If the email was submitted successfully, show a success message.
                        showMessage && success && (
                            <p className="text-green-500 text-sm mt-2">
                                Email sent successfully! We will get back to you soon :)
                            </p>
                        )
                    }
                </form>
            </article>
        </section>
    )
}

export default EmailSection