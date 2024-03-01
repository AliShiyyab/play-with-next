const HomePage = () => {
    return (
        <>
            <div className="flex flex-col bg-gray-200 py-4 items-center justify-center">
                <h1 className={'w-full text-center text-xl font-bold'}>Criteria 1</h1>
                {/*    TODO : List of cards depends on the criteria    */}
            </div>
            <div className={'w-full h-1 bg-blue-200'}/>
            <div className="flex flex-col bg-gray-200 py-4 items-center justify-center">
                <h1 className={'w-full text-center text-xl font-bold'}>Criteria 2</h1>
                {/*    TODO : List of cards depends on the criteria    */}
            </div>
            <div className={'w-full h-1 bg-blue-200'}/>
        </>
    );
}

export default HomePage;