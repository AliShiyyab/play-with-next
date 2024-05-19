import {BookCard} from "@/components/common/card/book-card";

export const PrinceGhaziBooks = () => {
    // TODO: Call an API to return all books for Prince
    let data = {
        title: "Prince Ghazi Books",
        books: [
            {
                name: "Islamic Book Title",
                description: "Islamic Book Description",
                image: "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
            },
            {
                name: "Islamic Book Title",
                description:
                    "Islamic Book Description",
                image:
                    "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
            }
            ,
            {
                name: "Islamic Book Title",
                description:
                    "Islamic Book Description",
                image:
                    "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
            }
            ,
            {
                name: "Islamic Book Title",
                description:
                    "Islamic Book Description",
                image:
                    "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
            }
            ,
            {
                name: "Islamic Book Title",
                description:
                    "Islamic Book Description",
                image:
                    "https://islamghar.pk/wp-content/uploads/2019/06/Sahih-Al-Bukhari-6-Volumes-Set-500x680.jpg"
            }
        ]
    }
    return (
        <div className="">
            <div className={"flex justify-center gap-8"}>
                <h1 className="text-center text-3xl md:text-4xl mb-5 text-red-900 font-bold">{data.title}</h1>
            </div>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4 text-red-900">
                {data && data.books.map((val, idx) => (
                    <div key={idx}>
                        <BookCard name={val.name} image={val.image} description={val.description} />
                    </div>
                ))}
            </div>
        </div>
    );
}