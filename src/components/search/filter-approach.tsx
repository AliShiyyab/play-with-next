"use client"
import {ChangeEvent, useState} from "react";
import MultipleSelectCheckmarks from "@/components/multiple-select";
import FilterApproachInterface from "@/types/filter-approach-type";
import {InitialFilterData} from "@/components/search/initial-values";
import {FormControlLabel, FormGroup} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";


const FilterApproach = () => {

    const [filterData, setFilterData] = useState<FilterApproachInterface>(InitialFilterData)
    const [categoryData, setCategoryData] = useState<string[]>([])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (name == 'isNotExactSearch') {
            setFilterData({
                    ...filterData,
                    isExactSearch: false
                }
            )
        } else if (name === 'isExactSearch') {
            setFilterData({
                ...filterData,
                isExactSearch: true
            })
        } else {
            const [category, language] = name.split(".");
            setFilterData({
                ...filterData,
                [category]: {
                    // @ts-ignore
                    ...filterData[category],
                    [language]: value !== 'true'
                }
            });
        }
    }

    return (
        <div className="w-full bg-gray-200 rounded-md flex md:flex-row flex-col justify-between">
            <div className="form-group p-4">
                <label htmlFor="searchBy" className={'font-bold'}>Search By</label>
                <FormGroup>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.searchBy.author}
                            name="searchBy.author"
                            checked={filterData.searchBy.author}
                            onChange={handleChange}/>
                    } label="Author"/>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.searchBy.name}
                            name="searchBy.name"
                            checked={filterData.searchBy.name}
                            onChange={handleChange}/>
                    } label="Name"/>
                </FormGroup>
            </div>
            <div className="form-group p-4">
                <label htmlFor="productType" className={"font-bold"}>Product Type</label>
                <FormGroup>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.productType.book}
                            name="productType.book"
                            checked={filterData.productType.book}
                            onChange={handleChange}/>
                    } label="Book"/>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.productType.podcast}
                            name="productType.podcast"
                            checked={filterData.productType.podcast}
                            onChange={handleChange}/>
                    } label="Podcast"/>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.productType.quran}
                            name="productType.quran"
                            checked={filterData.productType.quran}
                            onChange={handleChange}/>
                    } label="Qur'an"/>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.productType.tafsir}
                            name="productType.tafsir"
                            checked={filterData.productType.tafsir}
                            onChange={handleChange}/>
                    } label="Tafsir"/>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.productType.theker}
                            name="productType.theker"
                            checked={filterData.productType.theker}
                            onChange={handleChange}/>
                    } label="Dheker"/>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.productType.video}
                            name="productType.video"
                            checked={filterData.productType.video}
                            onChange={handleChange}/>
                    } label="Video"/>
                </FormGroup>
            </div>
            <div className="form-group p-4">
                <label htmlFor="isExactSearch" className={'font-bold'}>Exact search</label>
                <FormGroup>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.isExactSearch}
                            name="isExactSearch"
                            checked={filterData.isExactSearch}
                            onChange={handleChange}/>
                    } label="Yes"/>
                    <FormControlLabel control={
                        <Checkbox
                            value={!filterData.isExactSearch}
                            name="isNotExactSearch"
                            checked={!filterData.isExactSearch}
                            onChange={handleChange}/>} label="No"/>
                </FormGroup>
            </div>
            <div className="form-group p-4">
                <label htmlFor="sortingBy" className={"font-bold"}>Sorting By</label>
                <FormGroup>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.sortingBy.name}
                            name="sortingBy.name"
                            checked={filterData.sortingBy.name}
                            onChange={handleChange}/>
                    } label="By Name"/>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.sortingBy.publishedDate}
                            name="sortingBy.publishedDate"
                            checked={filterData.sortingBy.publishedDate}
                            onChange={handleChange}/>
                    } label="By Published Date"/>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.sortingBy.rate}
                            name="sortingBy.rate"
                            checked={filterData.sortingBy.rate}
                            onChange={handleChange}/>
                    } label="By Rating"/>
                </FormGroup>
            </div>
            <div className="form-group p-4">
                <label htmlFor="byLanguages" className={'font-bold'}>Languages</label>
                <FormGroup>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.byLanguages.arabic}
                            name="byLanguages.arabic"
                            checked={filterData.byLanguages.arabic}
                            onChange={handleChange}
                        />} label="Arabic"/>
                    <FormControlLabel control={
                        <Checkbox
                            value={filterData.byLanguages.english}
                            name="byLanguages.english"
                            checked={filterData.byLanguages.english}
                            onChange={handleChange}
                        />} label="English"/>
                </FormGroup>
            </div>
            <div className="form-group p-4">
                <label htmlFor="byCategory" className={'font-bold'}>Category</label>
                <MultipleSelectCheckmarks data={categoryData} setData={setCategoryData}/>
                {categoryData.length > 0 && (
                    <ul>
                        {categoryData.map((val, idx) => (
                            <li className={'ml-5 pt-2 list-disc'} key={idx}>{val}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default FilterApproach;