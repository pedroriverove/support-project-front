import React, {useState} from 'react'
import AuthService from '@/services/auth.service';
import LoginFactory from '@/factories/login.factory';
import logo from '@/assets/images/logo.svg';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

const SignInComponent: React.FC<any> = () => {
    let navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm();

    const [validLogin, setValidLogin] = useState<Boolean>(false);

    const handleLogin = (data: any) => {
        const auth: LoginFactory = {
            username: data.username,
            password: data.password
        };

        AuthService.login(auth)
            .then((response: any) => {
                localStorage.setItem("user", JSON.stringify(response.data));
                navigate("/");
            })
            .catch((e: Error) => {
                setValidLogin(true);
                console.log(e);
            });
    };

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
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="mb-6">
                                    <input
                                        placeholder="Usuario"
                                        type="text"
                                        {...register("username", {required: true})}
                                        className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                    {errors.username?.type === 'required' &&
                                        <span className="text-danger"> Este campo es obligatorio</span>}
                                </div>
                                <div className="mb-6">
                                    <input
                                        placeholder="Contraseña"
                                        type="password"
                                        {...register("password", {required: true})}
                                        className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                    {errors.password?.type === 'required' &&
                                        <span className="text-danger"> Este campo es obligatorio</span>}
                                </div>
                                {validLogin &&
                                    <div className="mb-6">
                                        <span
                                            className="text-danger"> Las credenciales introducidas son incorrectas.</span>
                                    </div>
                                }
                                <div className="mb-10">
                                    <input
                                        type="submit"
                                        value="Iniciar sesión"
                                        className="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                                    />
                                </div>
                            </form>
                            <section className="pt-2">
                                <div className="container">
                                    <div className="mb-2 w-full">
                                        <div
                                            className="rounded-lg border border-light bg-white py-4 px-4 shadow-card sm:px-6 md:px-8 md:py-5"
                                        >
                                            <h3 className="pb-2 text-xl font-bold text-dark sm:text-2xl">
                                                Asministrador
                                            </h3>
                                            <ul className="flex items-center justify-center">
                                                <li className="flex items-center">
                                                    <p className="text-base font-semibold text-black hover:text-primary">
                                                        Usuario
                                                    </p>
                                                    <i className="fas fa-arrow-right-long px-3"/>
                                                </li>
                                                <li className="text-base font-semibold text-body-color">admin</li>
                                            </ul>
                                            <ul className="flex items-center justify-center">
                                                <li className="flex items-center">
                                                    <p className="text-base font-semibold text-black hover:text-primary">
                                                        Contraseña
                                                    </p>
                                                    <i className="fas fa-arrow-right-long px-3"/>
                                                </li>
                                                <li className="text-base font-semibold text-body-color">password</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mb-2 w-full">
                                        <div
                                            className="rounded-lg border border-light bg-white py-4 px-4 shadow-card sm:px-6 md:px-8 md:py-5"
                                        >
                                            <h3 className="pb-2 text-xl font-bold text-dark sm:text-2xl">
                                                Desarrollador
                                            </h3>
                                            <ul className="flex items-center justify-center">
                                                <li className="flex items-center">
                                                    <p className="text-base font-semibold text-black hover:text-primary">
                                                        Usuario
                                                    </p>
                                                    <i className="fas fa-arrow-right-long px-3"/>
                                                </li>
                                                <li className="text-base font-semibold text-body-color">user1</li>
                                            </ul>
                                            <ul className="flex items-center justify-center">
                                                <li className="flex items-center">
                                                    <p className="text-base font-semibold text-black hover:text-primary">
                                                        Contraseña
                                                    </p>
                                                    <i className="fas fa-arrow-right-long px-3"/>
                                                </li>
                                                <li className="text-base font-semibold text-body-color">password</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignInComponent
