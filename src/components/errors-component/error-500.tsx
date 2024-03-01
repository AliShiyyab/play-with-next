"use client"

import Button from "@/components/button";
import {useRouter} from "next/navigation";

const Page = () => {
    const {push} = useRouter()

    const handleGoBack = (): void => {
        push("/");
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-4">Internal Server Error</h1>
                <p className="mb-4">Something went wrong on our end. Please try again later.</p>
                <Button buttonName={"Go Back"} ButtonStyle={"bg-blue-500 text-white px-4 py-2 rounded-md"}
                        clickingAction={handleGoBack}/>
            </div>
        </div>
    );
};

export default Page;