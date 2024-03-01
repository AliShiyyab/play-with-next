import {SearchApproach} from "@/components/search/search-approach";
import FilterApproach from "@/components/search/filter-approach";

const SearchProvider = () => {
    return (
        <div className="flex flex-col bg-gray-200 py-4 items-center justify-center">
            <SearchApproach key={'search-approach-component'}/>
            <FilterApproach key={'filter-approach-component'}/>
        </div>
    )
}

export default SearchProvider;