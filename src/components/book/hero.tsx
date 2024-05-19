import {BookCategorization} from "@/components/book/book-categorization";

export const BookHero = () => {
    return (
        <div className="p-5 md:px-28 lg:pt-16 lg:px-44 bg-gray-100 flex flex-col gap-24">
            <h1 className="text-center text-xl md:text-3xl font-bold" >
                Surf categories of rich resources and books
            </h1>
            <BookCategorization />
        </div>
    );
}