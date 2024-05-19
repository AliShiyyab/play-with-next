import {CalligraphyCard} from "@/components/common/card/calligraphy-card";

export const Criteria = () => {
    // Api for first criteria contain the card content and the Criteria name. 

    return (
        <div className="p-5">
            <div className={"flex justify-center gap-8"}>
                <h1 className="text-center text-3xl md:text-4xl font-bold mb-5">{criteriaData.title}</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {criteriaData.data.map((criteria) => (
                    <CalligraphyCard image={criteria.image} name={criteria.name} description={criteria.description} />
                ))}
            </div>
        </div>
    );
}

const criteriaData = {
    title: "Calligraphy Of The Day",
    data: [
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
    ]
};
