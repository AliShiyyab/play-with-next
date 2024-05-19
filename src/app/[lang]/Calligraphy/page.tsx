import {BookCard} from "@/components/common/card/book-card";
import {SearchEngine} from "@/components/search-engine/search-engine";

const Calligraphy  = ({params} : {params: {lang: string}}) => {
    
    // call API HERE to get all calligrapher replace it with data
    let  data = [
        {
            id: "1234",
            name: 'Calligraphy Name',
            description: "Calligraphy Description",
            image: "https://media.istockphoto.com/id/1422692185/vector/islamic-and-arabic-calligraphy-of-surah-al-fatiha-the-first-chapter-of-the-noble-quran.jpg?s=612x612&w=0&k=20&c=S5GzUSnlj--_48n56NxqSlaKXfRagLrZfa0Si4sYsWQ="
        },
        {
            id: "5678",
            name: 'Calligraphy Name',
            description: "Calligraphy Description",
            image: "https://media.istockphoto.com/id/1422692185/vector/islamic-and-arabic-calligraphy-of-surah-al-fatiha-the-first-chapter-of-the-noble-quran.jpg?s=612x612&w=0&k=20&c=S5GzUSnlj--_48n56NxqSlaKXfRagLrZfa0Si4sYsWQ="
        },
        {
            id: "1234",
            name: 'Calligraphy Name',
            description: "Calligraphy Description",
            image: "https://media.istockphoto.com/id/1422692185/vector/islamic-and-arabic-calligraphy-of-surah-al-fatiha-the-first-chapter-of-the-noble-quran.jpg?s=612x612&w=0&k=20&c=S5GzUSnlj--_48n56NxqSlaKXfRagLrZfa0Si4sYsWQ="
        },
        {
            id: "5678",
            name: 'Calligraphy Name',
            description: "Calligraphy Description",
            image: "https://media.istockphoto.com/id/1422692185/vector/islamic-and-arabic-calligraphy-of-surah-al-fatiha-the-first-chapter-of-the-noble-quran.jpg?s=612x612&w=0&k=20&c=S5GzUSnlj--_48n56NxqSlaKXfRagLrZfa0Si4sYsWQ="
        },
        {
            id: "1234",
            name: 'Calligraphy Name',
            description: "Calligraphy Description",
            image: "https://media.istockphoto.com/id/1422692185/vector/islamic-and-arabic-calligraphy-of-surah-al-fatiha-the-first-chapter-of-the-noble-quran.jpg?s=612x612&w=0&k=20&c=S5GzUSnlj--_48n56NxqSlaKXfRagLrZfa0Si4sYsWQ="
        },
        {
            id: "5678",
            name: 'Calligraphy Name',
            description: "Calligraphy Description",
            image: "https://media.istockphoto.com/id/1422692185/vector/islamic-and-arabic-calligraphy-of-surah-al-fatiha-the-first-chapter-of-the-noble-quran.jpg?s=612x612&w=0&k=20&c=S5GzUSnlj--_48n56NxqSlaKXfRagLrZfa0Si4sYsWQ="
        }
    ];
    
    return (
        <div className={'flex flex-col py-12 gap-8 md:gap-16 lg:gap-24 w--full p-0 m-0 bg-gray-100'} style={{color: "#720505", fontWeight: "600"}}>
            <h1 className="text-center text-3xl md:text-4xl text-red-900 font-bold">Calligraphy</h1>
            <SearchEngine />
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4">
            {data && data.length > 0 && data.map((val) => (
                <BookCard name={val.name} image={val.image} description={val.description} />
            ))}
            </div>
        </div>
    );
}

export default Calligraphy;