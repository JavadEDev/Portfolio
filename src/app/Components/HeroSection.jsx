/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Material, Color } from 'three';
import useDownloader from "react-use-downloader";

const HeroSection = () => {
    const color3 = new Color("rgb(89, 88, 92)))");
    const color2 = new Color("rgb(168, 85, 247)0)");
    const color5 = new Color('skyblue');
    const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();
    const fileUrl = "../../../public/images/cv.pdf"
    const filename = "cv.pdf";
    return (
        <main className='lg:py-4 snap-center flex flex-col items-center justify-between'>
            <section className="grid grid-cols-1 sm:grid-cols-12 snap-center">
                <motion.article
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className='text-content mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold '>
                        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Hello, I'm {" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Javad',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web Developer',
                                2000,
                                'Mobile Developer',
                                2000,
                                'Front-End Developer',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <article>
                        <Link
                            href="/#contact"
                            className="inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-other-500 via-primary-500 to-secondary-500  hover:bg-border-2 text-content"                        >
                            Hire Me
                        </Link>
                        <Link
                            href="/downloads/Javad-CV.pdf" download
                            className="inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-other-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3 "                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link>
                    </article>
                </motion.article>
                <motion.article
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <article className="rounded-full w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
                        <Canvas>
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={1.5} />
                            <directionalLight position={[50, 1, 1]} />
                            <Sphere args={[1, 100, 200]} scale={2.2} >
                                <MeshDistortMaterial
                                    color={color2}
                                    attach="material"
                                    distort={0.5}
                                    speed={2}
                                />
                            </Sphere>
                        </Canvas>
                        {<Image
                            src="/images/hero-img.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />}
                    </article>
                </motion.article>
            </section>
        </main >
    )
}

export default HeroSection
