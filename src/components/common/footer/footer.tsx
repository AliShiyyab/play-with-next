import {JoinMailListSection} from "@/components/common/footer/join-mail-list-section";
import {LogoAndPages} from "@/components/common/footer/logo-and-pages";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 p-5">
            <div className="flex flex-col mx-auto gap-4">
                <LogoAndPages />
                <div className={'flex item-center w-full'}>
                    <div className={'h-0.5 border-1 w-full bg-gray-100'} />
                </div>
                <JoinMailListSection />
            </div>
            <div className="text-center text-sm mt-4">
                &copy; {new Date().getFullYear()} All Copyrights Reserved.
            </div>
        </footer>
    );
}
