'use client'
// Props Types
import React, {useState} from "react";

interface IContact {
    title: string
}

export const Contact = (props: IContact) => {
    const {title} = props;
    const [contactDetails, setContactDetails] = useState({name: "", email: "", message: ""})
    const handleSendEmail = () => {
        // install yarn add @sendgrid/mail then do the other process (reference : https://medium.com/@toralf.frich/simple-email-delivery-from-next-js-with-sendgrid-b12ce04cffe3)
    }

    const handleChange = (e: any) => {
        setContactDetails((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    return (
        <div className={'flex flex-row px-4 md:p-12 w-full text-red-900'}>
            <div className={'flex flex-col w-full p-2 md:p-4 lg:p-6 border rounded-2xl shadow-xl'}>
                <h1 className={"text-start text-xl md:text-2xl mb-5 font-bold"}>{title}</h1>
                <div className={"flex gap-4 flex-col md:flex-row justify-between"}>
                    <div className={'flex flex-col gap-4'}>

                        <div className={"flex flex-col md:flex-row gap-2 items-center"}>
                            <span>Name</span>
                            <input type="text"
                                   name={"name"}
                                   value={contactDetails.name}
                                   onChange={handleChange}
                                   placeholder={"Enter your name here"}
                                   className="border border-gray-300 p-2 rounded text-gray-700"/>
                        </div>

                        <div className={"flex flex-col md:flex-row gap-2 items-center"}>
                            <span>Email</span>
                            <input type="email"
                                   name={"email"}
                                   value={contactDetails.email}
                                   onChange={handleChange}
                                   placeholder={"Enter your email here"}
                                   className="border border-gray-300 p-2 rounded text-gray-700"/>
                        </div>
                    </div>
                    <div className={'flex flex-col md:flex-row gap-4'}>

                        <div className={"flex flex-col md:flex-row gap-2 items-start"}>
                            <span className={'pt-2'}>Message</span>
                            <textarea
                                name={"message"}
                                value={contactDetails.message}
                                onChange={handleChange}
                                placeholder={"Enter your message here"}
                                className="border border-gray-300 p-2 rounded text-gray-700 h-full"
                            />
                        </div>

                    </div>
                    <div className={"flex justify-center"}>
                        <div className={"flex items-center"}>
                            <button
                                className={"px-4 py-4 border rounded-2xl bg-red-800 text-white hover:bg-white hover:text-red-800 "}
                                onClick={handleSendEmail}>Send
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}