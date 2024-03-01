"use client"

import {useState} from "react";
import {toast} from "react-toastify";

interface SearchInterface {
    queryData?: null | any
}

export const SearchApproach = () => {
    const [enteredValue, setValue] = useState<string>("")

    const handleAddOrChangeValue = (value: string) => {
        // TODO
        setValue(value ? value : "");
    }

    const handleSearch = () => {
        if (enteredValue) {
            // TODO    
        } else {
            toast.error("Please add value before do search")
        }
    }

    const handleAdvanceButton = () => {
        // TODO
    }

    return (
            <div className="flex sm:flex-row flex-col gap-4 items-center p-2 bg-gray-200 rounded-md w-full md:w-1/2">
                <input
                    type="text"
                    value={enteredValue}
                    placeholder={"Please add a keys to search depends on"}
                    onChange={(e) => handleAddOrChangeValue(e.target.value)}
                    className="flex-1 appearance-none focus:outline-none focus:ring-0 focus:bg-white bg-gray-200 text-sm sm:text-base text-gray-700 py-1 px-2 leading-tight focus:bg-gray-200 rounded-md"
                />
                <div className={'flex flex-row gap-4'}>
                    <button
                        key={'search-button'}
                        onClick={handleSearch}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md"
                    >
                        Search
                    </button>
                    <button
                        key={'advance-button'}
                        onClick={handleAdvanceButton}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md"
                    >
                        Advance
                    </button>
                </div>
            </div>
    );
}