import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css"
import {locales} from "@/middleware";
import React from "react";
import { NavigationBar } from "@/components/common/header/navigation-bar";
import Footer from "@/components/common/footer/footer";

const inter = Inter({subsets: ["cyrillic"]});

export const metadata: Metadata = {
    title: "Demo App",
    description: "Play with next",
};

 function RootLayout({
                                       children,
     params
                                   }: Readonly<{
    children: React.ReactNode;
    params: {lang: string}
}>) {
        
    return (
        <html lang="en" className={"bg-white"} dir={params.lang !== "en" ? "rtl" : "ltr"}>
        <body className={inter.className}>
        <div className={"bg-white"}>
            <NavigationBar lang={params.lang} locales={locales}/>
            <div className={'h-0.5 bg-red-900'} />
            {children}
            <div className={'h-0.5 bg-red-900'} />
            <Footer />
        </div>
        </body>
        </html>
    );
}

export default RootLayout;