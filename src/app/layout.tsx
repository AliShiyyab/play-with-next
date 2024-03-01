import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar/nav";
import Footer from "@/components/footer";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from "@mui/system";
import theme from "@/theme/common";
import SearchProvider from "@/components/search/SearchProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Demo App",
    description: "Play with next",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body className={inter.className}>
        <AppRouterCacheProvider options={{key: 'css'}}>
            <ThemeProvider theme={theme}>
                <Header initialTime={new Date()}/>
                <div className={"py-4 bg-gray-200"}>
                    <SearchProvider />
                    <div className={'w-full h-1 bg-blue-200'}/>
                    {children}
                    <ToastContainer
                        position="bottom-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
                <Footer/>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}