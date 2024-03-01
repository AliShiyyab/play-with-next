import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
                <p className="mb-4">The page you're looking for doesn't exist or has been moved.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    <a href="/" className="text-white">
                        Go Back
                    </a>
                </button>
            </div>
        </div>
    );
};

export default NotFound;