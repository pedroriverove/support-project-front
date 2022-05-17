import React from 'react';
import logo from '@/assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                        <div className="mb-10 w-full">
                            <Link
                                to="/"
                                className="mb-6 inline-block max-w-[160px]"
                            >
                                <img src={logo} className="app-logo" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-dark">React</h4>
                            <ul>
                                <li>
                                    <Link
                                        to="/"
                                        className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary"
                                    >
                                        React router dom
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-dark">Tailwindcss</h4>
                            <ul>
                                <li>
                                    <Link
                                        to="/"
                                        className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary"
                                    >
                                        Postcss
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary"
                                    >
                                        Autoprefixer
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary"
                                    >
                                        Tailgrids
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-dark">Express</h4>
                            <ul>
                                <li>
                                    <Link
                                        to="/"
                                        className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary"
                                    >
                                        Mysql2
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary"
                                    >
                                        Typeorm
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-dark">Typescript</h4>
                            <ul>
                                <li>
                                    <Link
                                        to="/"
                                        className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary"
                                    >
                                        Version @v4.6.4
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary"
                                    >
                                        Craco
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary"
                                    >
                                        Nodemon
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
