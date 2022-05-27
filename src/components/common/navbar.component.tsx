import React, {useEffect, useState} from 'react';
import logo from '@/assets/images/logo.svg';
import {Link, useNavigate} from 'react-router-dom';
import AuthService from '@/services/auth.service';
import UserInterface from '@/interfaces/user.interface';

const NavbarComponent = () => {
    let navigate = useNavigate();

    const [navbarOpen, setNavbarOpen] = useState(false);

    const handlelogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    const [user, setUser] = useState<UserInterface>();

    useEffect(() => {
        retrieveUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const retrieveUser = () => {
        const userStr = localStorage.getItem("user");
        let response: any = null;

        if (userStr) {
            response = JSON.parse(userStr);
        }

        if (response && response.user.id) {
            const userID: number = response.user.id;

            AuthService.get(userID)
                .then((response: any) => {
                    setUser(response.data);
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        }
    };

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
                                {(typeof user !== 'undefined' && user.roles.name === "admin")
                                    ?
                                    <div>
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
                                                    to="/assigned-users"
                                                    className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                                                >
                                                    Usuarios asignados
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    :
                                    <div>
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
                                                    to="/assigned-tickets"
                                                    className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                                                >
                                                    Tickets asignados
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <button
                                onClick={handlelogout}
                                className="rounded-lg bg-primary py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavbarComponent
