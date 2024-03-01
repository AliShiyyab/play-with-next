"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Footer = () => {
    const pathname = usePathname();
    
    return (
        <footer className="bg-gray-600 text-white p-4">
            <div className="flex sm:flex-col md:flex-col pt-4 items-center justify-center">
                <nav className="flex flex-col md:flex-row gap-4">
                    <Link
                        target={"_blank"}
                        legacyBehavior
                        className={`px-4 py-2`}
                        href="/terms_and_conditions"
                    >
                        Terms and Conditions
                    </Link>
                    <Link
                        target={"_blank"}
                        legacyBehavior
                        className={`px-4 py-2`}
                        href="/about_us"
                    >
                        About Us
                    </Link>
                    <Link
                        target={"_blank"}
                        legacyBehavior
                        className={`px-4 py-2`}
                        href="/contact_us"
                    >
                        Contact Us
                    </Link>
                    <Link
                        target={"_blank"}
                        legacyBehavior
                        className={`px-4 py-2`}
                        href={"/contribution_to_references"}
                    >
                        Contribution To References
                    </Link>
                </nav>
            </div>
            <div className={'flex flex-row justify-center py-4 w-auto'}>
                {new Date().getFullYear()} &copy; All rights reserved - Full Islam 
            </div>
        </footer>
    );
};

export default Footer;