import React, { useState, useEffect } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { LuSquareArrowUpRight } from "react-icons/lu";
import mountain from '../assets/mountain.png';
import BlinkingStars from './BlinkingStars';

function HeroSection() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const stats = [
        {
            name: "Customers",
            value: "5M+"
        },
        {
            name: "Earnings",
            value: "450M+"
        },
        {
            name: "Retention Rate",
            value: "22%"
        },
        {
            name: "Coverage",
            value: "80%"
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <div id='home' className="w-screen h-screen bg-[#00031D] flex flex-col justify-center items-center text-center text-white relative z-10">
                <div className="w-full flex flex-col items-center justify-center relative z-20 xl:-top-12 md:-top-10 transition-all duration-500 ease-in-out"
                    style={{
                        transform: `translateX(${Math.min(scrollPosition / 5, 100)}px)` // Parallax effect on text from right
                    }}
                >
                    <h1 className='text-4xl md:text-6xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-clip-text mb-4'>
                        Grow Your Business To <br /> New Heights
                    </h1>
                    <p className='w-[320px] sm:w-[400px] text-[10px] sm:text-xs'>
                        Vertex partners with businesses to design tools that simplify processes, empower teams, and deliver results.
                    </p>
                    <a href="#contact" className='p-2 m-3 border-2 rounded-full hover:scale-110 transition-all ease-in-out'>
                        <FaArrowUpLong className='rotate-45' />
                    </a>
                </div>
                <BlinkingStars />
                {/* Mountain Image */}
                <img src={mountain} className="absolute left-0 top-[70vh] sm:top-[40vh] md:top-[20vh] lg:-top-[0vh] xl:-top-[22vh] select-none transition-all duration-500 ease-in-out"
                    style={{
                        transform: `translateY(${scrollPosition / 2}px)`, // Mountain moves up as you scroll
                        zIndex: -1 // Ensure the mountain stays behind the content
                    }}
                />
            </div>

            {/* About Section */}
            <div className='w-screen h-96 bg-[#00031D] relative z-30 flex flex-col md:flex-row justify-evenly items-center text-white'>
                <div className="w-1/2 flex flex-col items-center"
                    style={{
                        transform: `translateX(${Math.min(scrollPosition / 5, 100)}px)` // Parallax effect on text from right
                    }}
                >
                    <div>
                        <div className='flex gap-2 items-center text-xs'>
                            <div className='h-[1px] w-[40px] bg-white'></div>
                            <p>About</p>
                        </div>
                        <h1 className='text-4xl font-semibold'>
                            Who we are <br /> and <span className='bg-[#c5c8e6] rounded-md text-[#282d56]'>What we do.</span>
                        </h1>
                        <a className='flex items-center cursor-pointer mt-2'>
                            <div className='rounded-full border-2 p-2 m-1 flex items-center'>
                                <IoBookOutline className='text-white' />
                            </div>
                            <div className='flex flex-col'>
                                Know more about our company <div className='flex items-center gap-2'> company <LuSquareArrowUpRight /></div>
                            </div>
                        </a>
                    </div>
                </div>
                

                <div className='w-1/2 flex flex-col justify-center gap-3 pr-8'>
                    <p className='text-sm font-semibold'>
                        We are a company focused on empowering businesses and individuals in the digital age. Our mission is to create visually appealing and functional digital pages tailored to each client's needs.
                    </p>
                    <p className='font-thin text-sm'>
                        We offer a range of services, including website design, development, and innovative solutions to enhance brand identity and user engagement. We also build platforms that promote learning and skill development, connecting technology with education. Whether you're a startup, established business, or learner, we’re here to help you succeed in the digital world.
                    </p>
                    <div className='flex flex-row justify-evenly'>
                        {stats.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col items-center justify-start'>
                                    <h1 className='text-2xl font-bold'>
                                        {item.value}
                                    </h1>
                                    <p className='text-sm'>
                                        {item.name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
