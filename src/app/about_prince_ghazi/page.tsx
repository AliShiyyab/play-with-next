import Image from "next/image";
import image from "../../../public/PrinceGhazi.jpg"
import Cards from "@/components/card/cards";
import GetBooksService from "@/services/get-books.service";

const Page = async () => {
    
    let result = await GetBooksService()
    console.log(result)
    
    return (
        <div className={'flex flex-col gap-2 bg-gray-200 w-full py-4'}>
            <div className="px-4">
                <div className={'flex flex-col place-content-center sm:flex-row gap-4 w-full'}>
                    <Image
                        src={image}
                        style={{alignSelf: "center"}}
                        width={200}
                        height={200}
                        alt="Image not found"
                    />
                    <div className={'flex flex-col place-content-center'}>
                        <h1 className="font-bold text-2xl text-center mt-4">
                            About H.R.H Prince Ghazi bin Muhammad
                        </h1>
                        <p className="w-full lg:px-16 md:px-4 text-md lg:text-xl text-center mt-2">
                            HRH Prince Ghazi bin Muhammad bin Talal is a professor of Islamic
                            philosophy with PhDs from Al-Azhar University and the University of
                            Cambridge. He has held numerous official and nongovernmental positions
                            in Jordan, including chief advisor for religious and cultural affairs
                            to HM King Abdullah II. His writings include Love in the Holy Quran.
                        </p>
                    </div>
                </div>
            </div>
            <div className={'w-full h-1 bg-blue-200'}/>
            <h2 className={'w-full text-center py-4 text-xl  font-bold'}>Books</h2>
            <Cards/>
            <div className={'w-full h-1 bg-blue-200'}/>
            <h2 className={'w-full text-center py-4 text-xl font-bold'}>Books as Joint Author or Editor</h2>
            <Cards/>
        </div>
    );
}

export default Page;