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
                            React ^18.1.0
                        </h6>
                        <p className="mb-4">
                            <a
                                className="text-gray-600"
                                target="_blank"
                                href="https://create-react-app.dev/docs/adding-typescript/"
                                rel="noreferrer"
                            >
                                Typescript
                            </a>
                        </p>
                        <p className="mb-4">
                            <a
                                className="text-gray-600"
                                target="_blank"
                                href="https://github.com/axios/axios"
                                rel="noreferrer"
                            >
                                Axios
                            </a>
                        </p>
                        <p>
                            <a
                                className="text-gray-600"
                                target="_blank"
                                href="https://github.com/gsoft-inc/craco"
                                rel="noreferrer"
                            >
                                Craco
                            </a>
                        </p>
                        <p className="mb-4">
                            <a
                                className="text-gray-600"
                                target="_blank"
                                href="https://github.com/react-hook-form/react-hook-form"
                                rel="noreferrer"
                            >
                                React Hook Form
                            </a>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Tailwindcss ^3.0.24
                        </h6>
                        <p className="mb-4">
                            <a
                                className="text-gray-600"
                                target="_blank"
                                href="https://github.com/TailGrids/tailwind-ui-components"
                                rel="noreferrer"
                            >
                                Tailgrids
                            </a>
                        </p>
                        <p className="mb-4">
                            <a
                                className="text-gray-600"
                                target="_blank"
                                href="https://github.com/FortAwesome/Font-Awesome"
                                rel="noreferrer"
                            >
                                Fortawesome
                            </a>
                        </p>
                        <p className="mb-4">
                            <a
                                className="text-gray-600"
                                target="_blank"
                                href="https://github.com/postcss/postcss"
                                rel="noreferrer"
                            >
                                Postcss
                            </a>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Express ^4.18.1
                        </h6>
                        <p className="mb-4">
                            <a
                                className="text-gray-600"
                                target="_blank"
                                href="https://www.typescriptlang.org/"
                                rel="noreferrer"
                            >
                                Typescript
                            </a>
                        </p>
                        <p className="mb-4">
                            <a
                                className="text-gray-600"
                                target="_blank"
                                href="https://github.com/sidorares/node-mysql2"
                                rel="noreferrer"
                            >
                                MySQL2
                            </a>
                        </p>
                        <p className="mb-4">
                            <a
                                className="text-gray-600"
                                target="_blank"
                                href="https://github.com/typeorm/typeorm"
                                rel="noreferrer"
                            >
                                Typeorm
                            </a>
                        </p>
                        <p className="mb-4">
                            <a
                                className="text-gray-600"
                                target="_blank"
                                href="https://github.com/remy/nodemon"
                                rel="noreferrer"
                            >
                                Nodemon
                            </a>
                        </p>
                        <p className="mb-4">
                            <a
                                className="text-gray-600"
                                target="_blank"
                                href="https://github.com/auth0/node-jsonwebtoken"
                                rel="noreferrer"
                            >
                                Json web token
                            </a>
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
