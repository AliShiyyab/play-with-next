export const Criteria = () => {
    // Api for first criteria contain the card content and the Criteria name. 

    return (
        <div className="p-5">
            <div className={"flex justify-center gap-8"}>
                <h1 className="text-center text-3xl md:text-4xl font-bold mb-5">{criteriaData.title}</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {criteriaData.data.map((author) => (
                    <div key={author.name} className="max-w-2xl flex flex-col md:flex-row items-center border-2 p-4 rounded-lg gap-12">
                        <img
                            src={author.image}
                            alt={author.name}
                            className="rounded-lg shadow-lg w-60 h-60"
                        />
                        <div className={'flex flex-col gap-4'}>
                            <p className="mt-2 text-start text-3xl">{author.name}</p>
                            <p className="mt-2 text-start text-lg">{author.description}</p>
                        </div>
                    </div>
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
