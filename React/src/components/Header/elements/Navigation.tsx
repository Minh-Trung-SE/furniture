import {AUTHENTICATE_STATUS} from "contexts/Authenticate";
import {AppState} from "contexts/root";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Navigation = () => {
    const {status} = useSelector((state: AppState) => state.authenticate);

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
                            <Link
                                to="/"
                                className="text-white opacity-80 hover:opacity-100 cursor-pointer"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/search"
                                className="text-white opacity-80 hover:opacity-100 cursor-pointer"
                            >
                                Shop
                            </Link>
                        </li>
                        <Link
                            to="/about-us"
                            className="text-white opacity-80 hover:opacity-100 cursor-pointer"
                        >
                            About US
                        </Link>
                        <Link
                            to="/contact-us"
                            className="text-white opacity-80 hover:opacity-100 cursor-pointer"
                        >
                            Contact US
                        </Link>
                    </ul>
                    {
                        (status === AUTHENTICATE_STATUS.AUTHENTICATED) ? (
                            <button
                                className="text-white opacity-80 hover:opacity-100 cursor-pointer"
                            >
                                Logout
                            </button>
                        ) : (
                            <div>
                                <Link
                                    to="/login"
                                    className="text-white opacity-80 hover:opacity-100 cursor-pointer"
                                >
                                    Login
                                </Link>
                                <span className="px-0.5 text-white opacity-80">/</span>
                                <Link
                                    to="/register"
                                    className="text-white opacity-80 hover:opacity-100 cursor-pointer"
                                >
                                    Signup
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>

        </nav>
    );
};

export default Navigation;