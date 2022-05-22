import React, { useState }  from 'react';
import logo from '@/assets/images/logo.svg';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <header className="flex w-full items-center bg-white">
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <Link to="/" className="block w-full py-5">
                            <img src={logo} className="navbar-logo" alt="logo"/>
                        </Link>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                id="navbarToggler"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color">
                                </span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color">
                                </span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color">
                                </span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={"absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none" + (!navbarOpen && " hidden")}
                            >
                                <ul className="blcok lg:flex">
                                    <li>
                                        <Link
                                            to="/"
                                            className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                                        >
                                            Inicio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/users"
                                            className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                                        >
                                            Usuarios
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/tickets"
                                            className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                                        >
                                            Tickets
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/tickets-assigned"
                                            className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                                        >
                                            Tickets asignados
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <Link
                                to="/logout"
                                className="py-3 px-7 text-base font-medium text-dark hover:text-primary"
                            >
                                Cerrar sesión
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavbarComponent
