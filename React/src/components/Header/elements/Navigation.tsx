const Navigation = () => {
    return (
        <nav className="bg-secondary">
            <div
                className="max-w-1200 mx-auto flex items-center"
            >
                <button
                    className="px-8 py-3 flex space-x-1 text-white font-medium bg-primary"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                    <span>
                        All category
                    </span>
                </button>

                <div
                    className="pl-12 grow flex justify-between"
                >
                    <ul className="flex space-x-5">
                        <li className="text-white opacity-80 hover:opacity-100 cursor-pointer">
                            Home
                        </li>
                        <li className="text-white opacity-80 hover:opacity-100 cursor-pointer">
                            Shop
                        </li>
                        <li className="text-white opacity-80 hover:opacity-100 cursor-pointer">
                            About US
                        </li>
                        <li className="text-white opacity-80 hover:opacity-100 cursor-pointer">
                            Contact US
                        </li>
                    </ul>
                    <button
                        className="text-white opacity-80 hover:opacity-100 cursor-pointer"
                    >
                        Login/Signup
                    </button>
                </div>
            </div>

        </nav>
    );
};

export default Navigation;