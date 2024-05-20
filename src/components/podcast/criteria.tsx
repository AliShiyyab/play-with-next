import React from "react";
import {FaRegPlayCircle} from "react-icons/fa";
import Link from "next/link";

export const Criteria = () => {
    return (
        <div className={''}>
            {criteriaData && criteriaData.map((val) => (
                <div className={"p-4 md:p-12"}>
                    <p className={'text-red-900 py-4 text-3xl text-center font-bold'}>{val.criteriaTitle}</p>
                    
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-4 text-red-900">
                        {val.criteriaData.map((item, idx) => (
                            <div key={idx} className={'flex flex-row border shadow p-4 justify-between gap-4 rounded-2xl'}>
                                
                                <div className={'flex flex-row gap-4'}>
                                    <img src={item.image} alt={"Image not found"} className={"w-28"} />
                                    <div className={'flex flex-col justify-center'}>
                                        <p className={'text-lg font-bold'}>{item.name}</p>
                                        <p className={'text-md'}>{item.description}</p>
                                    </div>
                                </div>
                                <div className={'flex flex-col justify-center'}>
                                    <Link href={`/Podcast/${idx}`} target={"_blank"}>
                                    <FaRegPlayCircle size={28} className={"cursor-pointer"} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

let criteriaData = [
    {
        criteriaTitle: "",
        criteriaData: [
            {
                name: "Profuse",
                description: "Podcast Description",
                image: "https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_640.jpg"
            },
            {
                name: "Profuse",
                description: "Podcast Description",
                image: "https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_640.jpg"
            },
            {
                name: "Profuse",
                description: "Podcast Description",
                image: "https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_640.jpg"
            },
            {
                name: "Profuse",
                description: "Podcast Description",
                image: "https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_640.jpg"
            }
        ]
    },
    {
        criteriaTitle: "Criteria Podcasts",
        criteriaData: [
            {
                name: "Profuse",
                description: "Podcast Description",
                image: "https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_640.jpg"
            },
            {
                name: "Profuse",
                description: "Podcast Description",
                image: "https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_640.jpg"
            },
            {
                name: "Profuse",
                description: "Podcast Description",
                image: "https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_640.jpg"
            }
        ]
    }
]