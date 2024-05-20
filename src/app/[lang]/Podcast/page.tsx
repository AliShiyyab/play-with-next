import {SearchEngine} from "@/components/search-engine/search-engine";
import {Criteria} from "@/components/podcast/criteria";

const Podcast = ({params}: {params: {lang: string}}) => {
    return (
        <div className={'flex flex-col py-12 gap-8 md:gap-12 lg:gap-12 p-0 m-0 bg-gray-100'} style={{color: "#720505", fontWeight: "600"}}>
            <h1 className="text-center text-3xl md:text-4xl text-red-900 font-bold">Podcast</h1>
            <SearchEngine />
            <Criteria />
        </div>
    );
}

export default Podcast;