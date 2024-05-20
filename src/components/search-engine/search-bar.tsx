'use client'

type ISearchBar = {
    filterData: null
}
export default function SearchBar({filterData}: ISearchBar) {
    
    const handleSubmit = () => {
        // submit API here
        console.log('Searching...')
    }
    
    return (
        <div className="flex justify-center items-center w-full p-4 text-gray-800">
            <div className="relative w-full max-w-xl">
                <input
                    type="text"
                    placeholder="Search by Author name or Title"
                    className="ps-4 pr-20 py-2 w-full rounded-2xl focus:outline-none focus:ring-indigo-600  bg-[#C1B59F80]"
                />
                <button
                    className="absolute end-0 top-0 rounded-2xl bg-maroon-600 text-white px-4 py-2 bg-red-800"
                    onClick={() => handleSubmit}
                >
                    Search
                </button>
            </div>
        </div>
    );
}
