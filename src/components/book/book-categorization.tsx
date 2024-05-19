export const BookCategorization = () => {
    let bookCategorization = ["1,000,000 Islamic Book", "25 Introductory Books", "500 Essential Books"]
    return (
        <div className={'flex flex-wrap gap-12 justify-center cursor-pointer'}>
            {bookCategorization && bookCategorization.map((val, idx) => (
                <div key={`book-category-${idx}`} className={'border-2 shadow text-center py-4 px-6 text-lg'}>
                    <p>{val}</p>
                </div>
            ))}
        </div>
    );
}