'use client';

import { useState } from "react";

export const TimeLine = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalEvents = events.data.length;

    const nextEvent = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % totalEvents);
    };

    const prevEvent = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + totalEvents) % totalEvents);
    };

    if (totalEvents === 0) {
        return <div>No events available.</div>;
    }

    const { date, title, description, imageUrl } = events.data[currentIndex];

    return (
        <div className="flex p-6 md:p-12 flex-col items-center gap-6 md:gap-12 bg-gray-50">
            <h1 className="py-4 text-center text-3xl md:text-5xl">{events.title}</h1>
            <div className='flex flex-col gap-4 md:flex-row justify-between items-center w-full px-4'>
                <button onClick={prevEvent} disabled={totalEvents < 2} className="hidden md:flex px-4 py-2 rounded text-lg border-2 border-red-900 hover:bg-red-800 hover:text-white">
                    Previous
                </button>
                <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20'>
                    <img src={imageUrl} alt={title} className="w-full max-w-xs md:max-w-md h-auto"/>
                    <div className='flex flex-col items-center gap-2 md:gap-4'>
                        <div className="text-xl md:text-4xl font-bold text-start">{date}</div>
                        <div className="text-xl md:text-3xl text-start">{title}</div>
                        <p className="text-base md:text-xl text-start">{description}</p>
                    </div>
                </div>
                <div className={'flex flex-row justify-between gap-8'}>
                <button onClick={prevEvent} disabled={totalEvents < 2} className="flex md:hidden px-4 py-2 rounded text-lg border-2 border-red-900 hover:bg-red-800 hover:text-white">
                    Previous
                </button>
                <button onClick={nextEvent} disabled={totalEvents < 2} className="px-4 py-2 rounded text-lg border-2 border-red-900 hover:bg-red-800 hover:text-white">
                    Next
                </button>
                </div>
            </div>
        </div>
    );
}

const events = {
    title: "Timeline",
    data: [
        {
            date: "622 AD",
            title: "The Prophet's Hijra",
            description: "And when the fire of demand had died down...",
            imageUrl: "https://c8.alamy.com/comp/2ATXBW0/souk-okaz-an-islamic-historical-event-held-in-taif-city-of-saudi-arabia-2ATXBW0.jpg",
        },
        {
            date: "630 AD",
            title: "Another Event",
            description: "Description of another event...",
            imageUrl: "https://c8.alamy.com/comp/2ATXBW0/souk-okaz-an-islamic-historical-event-held-in-taif-city-of-saudi-arabia-2ATXBW0.jpg",
        },
    ]
};
