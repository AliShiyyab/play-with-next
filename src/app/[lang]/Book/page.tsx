import {Criterias} from "@/components/book/criterias";
import {SearchEngine} from "@/components/search-engine/search-engine";
import {BookHero} from "@/components/book/hero";

const Book = ({params}: {params: {lang: string}}) => {
    return (
        <div className={'flex flex-col py-12 gap-8 md:gap-16 lg:gap-24 p-0 m-0 bg-gray-100'} style={{color: "#720505", fontWeight: "600"}}>
            <h1 className="text-center text-3xl md:text-4xl text-red-900 font-bold">Books</h1>
            <SearchEngine />
            <BookHero/>
            <Criterias />
        </div>
    )
}

export default Book;