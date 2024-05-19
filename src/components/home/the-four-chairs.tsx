import {BookCard} from "@/components/common/card/book-card";

export const TheFourChairs = () => {
    return (
        <div className="p-12 bg-gray-50">
            <div className={"flex justify-center gap-8"}>
                <h1 className="text-center text-3xl md:text-4xl font-bold mb-5">The Four Chairs</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {authors.map((author) => (
                    <BookCard name={author.name} image={author.image} />
                ))}
            </div>
        </div>
    );
}

// should be from strapi
const authors = [
    {
        name: 'Jalal al-Din al-Suyuti',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMCpWlPHmyO-Z1eT4IZqUcHBDecaJfErsTADq6P7JIgwKqWK2"
    },
    {
        name: 'Abu Hamid al-Ghazali',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMCpWlPHmyO-Z1eT4IZqUcHBDecaJfErsTADq6P7JIgwKqWK2"
    },
    {
        name: 'Yahya bin Sharaf al-Nawawi',
        image: "https://www.quranicthought.com/wp-content/uploads/2018/12/download-150x150.jpg"
    },
    {name: 'Fakhr al-Din al-Razi', image: "https://miro.medium.com/v2/resize:fit:462/1*ufyPBNZ5wp_OQSKI4dMtaQ.png"}
];
