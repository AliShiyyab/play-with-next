import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

export const JoinMailListSection = () => {
    return (
        <div className={'w-full flex flex-col lg:flex-row item-start justify-between gap-4 md:gap-0'}>
            <div className="flex flex-col md:flex-row justify-center">
                <form className="flex flex-wrap md:flex-row gap-4 items-starts md:items-center md:space-x-12">
                    <div className={"flex flex-row gap-2 items-center"}>
                        <input type="checkbox" className="accent-gray-700"/>
                        <span>Join Our Mailing List</span>
                    </div>
                    <div className={"flex flex-row gap-2 items-center"}>
                        <span>Name</span>
                        <input type="text"
                               placeholder={"Enter your name here"}
                               className="border border-gray-300 p-2 rounded text-gray-700"/>
                    </div>
                    <div className={"flex flex-row gap-2 items-center"}>
                        <span>Email</span>
                        <input type="text"
                               placeholder={"Enter your email here"}
                               className="border border-gray-300 p-2 rounded text-gray-700"/>
                    </div>
                    <div className={"flex flex-col items-center"}>
                    <button className="text-white w-fit px-4 py-2 rounded bg-red-800">Subscribe</button>
                    </div>
                </form>
            </div>
            <div className="flex justify-center md:justify-end items-center gap-8">
                <a href="#" className="text-blue-700 hover:text-gray-900"><FaFacebook size={28}/></a>
                <a href="#" className="text-red-700 hover:text-gray-900"><FaInstagram size={28}/></a>
                <a href="#" className="text-blue-700 hover:text-gray-900"><FaTwitter size={28}/></a>
            </div>
            <div></div>
        </div>
    )
}