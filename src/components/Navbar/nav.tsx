"use client"

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import {HeaderDataType} from "@/types/headerDataType";

interface HeaderInterface {
    initialTime: Date;
}

const headerData: HeaderDataType[] = [
    {
        link: '/',
        name: 'home',
        value: 'Home'
    }, {
        link: '/book',
        name: 'book',
        value: 'Book'
    }, {
        link: '/podcast',
        name: 'podcast',
        value: 'Podcast'
    }, {
        link: '/tafsir',
        name: 'tafsir',
        value: 'Tafsir'
    }, {
        link: '/calligraphy',
        name: 'calligraphy',
        value: 'Calligraphy'
    }, {
        link: '/video',
        name: 'video',
        value: 'Video'
    }, {
        link: '/about_prince_ghazi',
        name: "about-prince-ghazi",
        value: "About Prince Ghazi"
    }
]

const Header = ({initialTime}: HeaderInterface) => {
    const [currentTime, setCurrentTime] = useState<Date>(initialTime);
    const pathname = usePathname();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <header className="bg-gray-600 text-white p-4">
            <div className="flex flex-col items-center justify-center">
                <Link className="px-4 py-2" href="/">
                    <img src="/FullIslamLogo.svg" alt="Full Islam Logo" className="h-8 w-auto"/>
                </Link>
            </div>

            <div className="container mx-auto flex justify-between items-center">
                <button
                    className="block md:hidden text-gray-400 focus:outline-none"
                    onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        {isAccordionOpen ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.293 7.293a1 1 0 0 1 1.414-1.414L12 10.586l5.778-5.778a1 1 0 1 1 1.414 1.414L13.414 12l5.778 5.778a1 1 0 0 1-1.414 1.414L12 13.414l-5.778 5.778a1 1 0 0 1-1.414-1.414L10.586 12 4.778 6.222a1 1 0 0 1 0-1.414z"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            />
                        )}
                    </svg>
                </button>
                <nav className={`md:flex ${isAccordionOpen ? 'flex flex-col' : 'hidden'} md:items-center md:w-auto`}>
                    {headerData.map((val: HeaderDataType) => (
                        <Link key={val.name} href={val.link} legacyBehavior>
                            <a className={`px-4 py-2 ${pathname === `${val.link}` ? 'bg-gray-800 rounded-lg' : ''}`}>{val.value}</a>
                        </Link>
                    ))}
                </nav>
                <div className="text-gray-400">{currentTime.toLocaleTimeString()}</div>
            </div>
        </header>
    );
};

export default Header;
