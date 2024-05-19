export const LogoAndPages = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:item-center justify-between">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPVVOdQCeuQU3ps9F1KPcHvGR3zyiVAhykjP20Fx9nw&s"
                alt="Logo" className="mb-4 w-28 h-28"/>
            <nav>
                <ul className="flex flex-wrap justify-center gap-12 text-lg">
                    <li><a href="#" className="hover:underline">Contribution To References</a></li>
                    <li><a href="#" className="hover:underline">Contact Us</a></li>
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">Feedback</a></li>
                    <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                </ul>
            </nav>
        </div>
    )
}