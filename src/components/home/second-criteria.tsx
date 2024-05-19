import {BookCard} from "@/components/common/card/book-card";

export const SecondCriteria = () => {
    return (
        <div className="p-5">
            <div className={"flex justify-center gap-8"}>
                <h1 className="text-center text-3xl md:text-4xl font-bold mb-5">{secondCriteriaData.title}</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {secondCriteriaData && secondCriteriaData.data && secondCriteriaData.data.map((val) => (
                    <BookCard name={val.name} image={val.image} description={val.description} />
                ))}
            </div>
        </div>
    )
}

const secondCriteriaData = {
    title: "Popular Books",
    data: [
        {
            name: "Islamic Book Title",
            description: "Islamic Book Description",
            image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
        },
        {
            name: "Islamic Book Title",
            description: "Islamic Book Description",
            image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
        },
        {
            name: "Islamic Book Title",
            description: "Islamic Book Description",
            image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
        },
        {
            name: "Islamic Book Title",
            description: "Islamic Book Description",
            image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
        }
    ]
}