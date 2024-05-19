'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavigationBarProps = {
    lang: string;
    locales: string[];
};

export const NavigationBar = ({ lang, locales }: NavigationBarProps) => {
    const pathname = usePathname();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const createLocalizedUrl = (path: string, locale: string): string => {
        return locale ? `/${locale}/${path.split("/")[2] ? path.split("/")[2] : path.split("/")[1]}` : path;
    };

    const getPathname = () => {
        if (pathname && pathname.length > 3) {
            return pathname;
        }
        return '/';
    };

    const currentPath = getPathname();

    return (
        <div className="w-full px-4 py-4 flex flex-row justify-between items-center text-red-800 text-lg font-bold">
            <div className="w-24 h-24">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPVVOdQCeuQU3ps9F1KPcHvGR3zyiVAhykjP20Fx9nw&s"
                    alt="Image not found"
                />
            </div>
            <div className="hidden lg:flex gap-16">
                {[`/`, '/Book', '/Podcast', '/Calligraphy', '/Tafsir', '/About-Prince-Ghazi'].map((path) => (
                    <Link
                        key={path}
                        href={createLocalizedUrl(path, lang)}
                        className={currentPath === createLocalizedUrl(path, lang) || (path === "/" && pathname === `/${lang}`) ? 'underline' : ''}
                    >
                        {path === `/` ? 'Home' : path.substring(1).replace('-', ' ')}
                    </Link>
                ))}
            </div>
            <div className="hidden lg:flex" style={{ width: "50px" }}>
                {locales.map((locale) => (
                    lang !== locale && (
                        <Link
                            key={locale}
                            href={createLocalizedUrl(currentPath, locale)}
                        >
                            <span
                                className="p-4 text-white bg-red-800 rounded-2xl hover:bg-red-900 transition duration-300"
                            >
                                {locale === "ar" ? "Ar" : "En"}
                            </span>
                        </Link>
                    )
                ))}
            </div>
            <div className="lg:hidden">
                <button onClick={() => setMenuOpen(!isMenuOpen)} className="focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
                {isMenuOpen && (
                    <div className="absolute end-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
                        {[`/`, '/Book', '/Podcast', '/Calligraphy', '/Tafsir', '/About-Prince-Ghazi'].map((path) => (
                            <Link
                                key={path}
                                href={createLocalizedUrl(path, lang)}
                                className={`block px-4 py-2 text-sm capitalize hover:bg-gray-200 ${currentPath === createLocalizedUrl(path, lang) || (path === "/" && pathname === `/${lang}`) ? 'underline' : ''}`}
                            >
                                {path === `/` ? 'Home' : path.substring(1).replace('-', ' ')}
                            </Link>
                        ))}
                        {locales.map((locale) => (
                            lang !== locale && (
                                <Link
                                    key={locale}
                                    href={createLocalizedUrl(currentPath, locale)}
                                    className="block px-4 py-2 text-sm capitalize hover:bg-gray-200"
                                >
                                    {locale === "ar" ? "Ar" : "En"}
                                </Link>
                            )
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
