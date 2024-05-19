import {BookCard} from "@/components/common/card/book-card";

export const Criteria = (data: { title: string, data: { name: string, description?: string, image: string }[] }) => {
    return (
        <div className="p-12">
            <div className={"flex justify-center gap-8"}>
                <h1 className="text-center text-3xl md:text-4xl mb-5 text-red-900 font-bold">{data.title}</h1>
            </div>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4 text-red-900">
                {data && data.data.map((val, idx) => (
                    <div key={idx}>
                        <BookCard name={val.name} image={val.image} description={val.description} />
                    </div>
                ))}
            </div>
        </div>
    );
}