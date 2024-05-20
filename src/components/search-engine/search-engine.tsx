'use client'

import SearchBar from "@/components/search-engine/search-bar";
import React, {useState} from "react";
import Filtration from "@/components/search-engine/filtration";

export const SearchEngine = () => {
    const [filterData, setFilterDate] = useState(null)
    return (
        <>
            <SearchBar filterData={filterData}/>
            <Filtration setFilterDate={setFilterDate}/>
        </>
    );
}