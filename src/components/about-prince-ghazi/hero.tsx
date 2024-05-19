export const AboutPrinceGhaziHero = () => {
    return (
        <div className="p-0 md:p-4 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center text-lg md:text-xl lg:text-2xl text-red-900 md:px-20 gap-8 md:gap-20">
                <div className="w-full lg:w-1/3 xl:w-1/6 mb-4 lg:mb-0">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/32/H.R.H._Prince_Ghazi_bin_Muhammad_with_Shmagh_Smiling_13.12.11.jpg"
                        alt="HRH Prince Ghazi bin Muhammad"
                        className="border-gray-300 rounded-2xl border-2 mx-auto w-full max-w-sm h-auto"/>
                </div>
                <div className="w-full lg:w-2/3 xl:w-5/6">
                    <h2 className="text-2xl md:text-3xl font-semibold mt-2 md:mt-0">HRH Prince Ghazi bin Muhammad bin Talal</h2>
                    <p className="mt-2">A professor of Islamic philosophy with PhDs from Al-Azhar University and the University of Cambridge. He has held numerous official and nongovernmental positions in Jordan, including chief advisor for religious and cultural affairs to HM King Abdullah II.</p>
                    <p className="mt-2">His writings include Love in the Holy Quran. His projects include QuranicThought.com, GreatTafsirs.com, and FreeIslamicCalligraphy.com, which seek to make the jewels of Islamic civilization available to all at no cost.</p>
                </div>
            </div>
        </div>
    );
}
