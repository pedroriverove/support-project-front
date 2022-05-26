import React from 'react'
import logo from '@/assets/images/logo.svg';
import {Link} from 'react-router-dom'

const SignInComponent = () => {
    return (
        <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div
                            className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
                            <div className="mb-10 text-center md:mb-8">
                                <Link
                                    to="/"
                                    className="mx-auto inline-block max-w-[160px]"
                                >
                                    <img src={logo} className="app-logo" alt="logo"/>
                                </Link>
                            </div>
                            <form>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Correo electrónico"
                                        className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        placeholder="Contraseña"
                                        className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                </div>
                                <div className="mb-10">
                                    <input
                                        type="submit"
                                        value="Iniciar sesión"
                                        className="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                                    />
                                </div>
                            </form>
                            <p className="text-base text-[#adadad]">
                                ¿Aún no tienes una cuenta? <Link to="/signup"
                                                                 className="text-primary hover:underline">Regístrate.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignInComponent
