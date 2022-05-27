import React from 'react';
import logo from '@/assets/images/logo.svg';
import {Link} from 'react-router-dom';

const currentTime = new Date();
const year = currentTime.getFullYear();

const FooterComponent = () => {
    return (
        <footer className="h-10 text-center lg:text-left bg-white text-gray-600">
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="">
                        <div className="mb-10 w-full">
                            <Link
                                to="/"
                                className="mb-6 inline-block max-w-[160px]"
                            >
                                <img src={logo} className="app-logo" alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Products
                        </h6>
                        <p className="mb-4">
                            <Link
                                to="/"
                                className="text-gray-600"
                            >
                                Angular
                            </Link>
                        </p>
                        <p className="mb-4">
                            <Link
                                to="/"
                                className="text-gray-600"
                            >
                                React
                            </Link>
                        </p>
                        <p className="mb-4">
                            <Link
                                to="/"
                                className="text-gray-600"
                            >
                                Vue
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="/"
                                className="text-gray-600"
                            >
                                Laravel
                            </Link>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Products
                        </h6>
                        <p className="mb-4">
                            <Link
                                to="/"
                                className="text-gray-600"
                            >
                                Angular
                            </Link>
                        </p>
                        <p className="mb-4">
                            <Link
                                to="/"
                                className="text-gray-600"
                            >
                                React
                            </Link>
                        </p>
                        <p className="mb-4">
                            <Link
                                to="/"
                                className="text-gray-600"
                            >
                                Vue
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="/"
                                className="text-gray-600"
                            >
                                Laravel
                            </Link>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Products
                        </h6>
                        <p className="mb-4">
                            <Link
                                to="/"
                                className="text-gray-600"
                            >
                                Angular
                            </Link>
                        </p>
                        <p className="mb-4">
                            <Link
                                to="/"
                                className="text-gray-600"
                            >
                                React
                            </Link>
                        </p>
                        <p className="mb-4">
                            <Link
                                to="/"
                                className="text-gray-600"
                            >
                                Vue
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="/"
                                className="text-gray-600"
                            >
                                Laravel
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center p-6 bg-gray-200">
                <span>© {year} Copyright:</span>
                <a
                    className="text-gray-600 font-semibold"
                    href="https://tailwind-elements.com/"> @pedroriverove</a>
            </div>
        </footer>
    )
}

export default FooterComponent
