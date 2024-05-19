interface IBookCard {
    name: string,
    image: string,
    description?: string
}

export const BookCard = (data: IBookCard) => {
    return (
        <div key={data.name} className="min-w-lg flex flex-col items-center border-2 p-4 rounded-lg gap-2">
            <img
                src={data.image}
                alt={data.name}
                className="rounded-lg shadow-lg w-60 h-60"
            />
            <p className="mt-2 text-center">{data.name}</p>
            <p className="mt-2 text-center">{data.description}</p>
        </div>
    );
}