import {Introduction} from "@/components/home/intro";
import {SearchEngine} from "@/components/search-engine/search-engine";
import {TheFourChairs} from "@/components/home/the-four-chairs";
import {Criteria} from "@/components/home/criteria";
import {SecondCriteria} from "@/components/home/second-criteria";
import {TimeLine} from "@/components/home/time-line";

const Home = ({params} : {params: {lang: string}}) => {
    return (
        <div className={'flex flex-col gap-8 md:gap-16 lg:gap-24 p-0 m-0 bg-gray-100'} style={{color: "#720505", fontWeight: "600"}}>
            <Introduction />
            <SearchEngine />
            <TheFourChairs />
            <Criteria />
            <TimeLine />
            <SecondCriteria />
        </div>
    );
}

export default Home;