interface FilterApproachInterface {
    searchBy: {
        author: boolean;
        name: boolean;
    };
    productType: {
        book: boolean;
        quran: boolean;
        tafsir: boolean;
        theker: boolean;
        podcast: boolean;
        video: boolean;
    };
    sortingBy: {
        name: boolean;
        publishedDate: boolean;
        rate: boolean;
    };
    byLanguages: {
        arabic: boolean;
        english: boolean;
    };
    byCategorization: {
        categories: string[];
    };
    isExactSearch: boolean;
}

export default FilterApproachInterface;