import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css"

const inter = Inter({subsets: ["cyrillic"]});

export const metadata: Metadata = {
    title: "Demo App",
    description: "Play with next",
};

 function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" className={"bg-white"}>
        <body className={inter.className}>
        <div className={"bg-white"}>
            {children}
        </div>
        </body>
        </html>
    );
}

export default RootLayout;