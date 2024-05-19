import {AboutPrinceGhaziHero} from "@/components/about-prince-ghazi/hero";
import {PrinceGhaziBooks} from "@/components/about-prince-ghazi/prince-ghazi-books";

const AboutPrinceGhazi = ({params}: {params: {lang: string}}) => {
    return (
        <div className={'flex flex-col p-4 md:p-12 gap-24'}>
            <h1 className="text-center text-3xl md:text-4xl text-red-900 font-bold">About Prince Ghazi</h1>
            <AboutPrinceGhaziHero/>
            <PrinceGhaziBooks/>
        </div>
    )
}

export default AboutPrinceGhazi;