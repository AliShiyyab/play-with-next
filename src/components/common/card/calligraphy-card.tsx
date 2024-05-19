interface ICalligraphyCard {
    name: string,
    image: string,
    description?: string
}

export const CalligraphyCard = (criteria: ICalligraphyCard) => {
    return (
        <div key={criteria.name} className="max-w-2xl flex flex-col md:flex-row items-center border-2 p-4 rounded-lg gap-12">
            <img
                src={criteria.image}
                alt={criteria.name}
                className="rounded-lg shadow-lg w-60 h-60"
            />
            <div className={'flex flex-col gap-4'}>
                <p className="mt-2 text-start text-3xl">{criteria.name}</p>
                <p className="mt-2 text-start text-lg">{criteria.description}</p>
            </div>
        </div>
    )
}