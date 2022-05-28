import React, {useEffect, useState} from 'react';
import RoleInterface from '@/interfaces/role.interface';
import RoleService from '@/services/role.service';
import UserFactory from '@/factories/user.factory';
import UserService from '@/services/user.service';
import {useForm} from 'react-hook-form';

const UserAddComponent: React.FC<any> = (props) => {
    const [showAdd, setShowAdd] = useState<boolean>(false);

    const [roles, setRoles] = useState<Array<RoleInterface>>([]);

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const [userEmail, setUserEmail] = useState<String>("");

    const [userUsername, setUserUsername] = useState<String>("");

    useEffect(() => {
        retrieveRoles();
    }, []);

    const retrieveRoles = () => {
        RoleService.getAll()
            .then((response: any) => {
                setRoles(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const emailIsUnique = async (request: string) => {
        UserService.validate("email", request)
            .then((response: any) => {
                setUserEmail(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });

        return request !== userEmail;
    };

    const usernameIsUnique = async (request: string) => {
        UserService.validate("username", request)
            .then((response: any) => {
                setUserUsername(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });

        return request !== userUsername;
    };

    const saveUser = (data: any) => {
        const user: UserFactory = {
            role_id: data.role_id,
            username: data.username,
            email: data.email,
            fullname: data.fullname,
            password: data.password
        };

        UserService.create(user)
            .then((response: any) => {
                const items = {
                    id: response.data.id,
                    role_id: response.data.role_id,
                    username: response.data.username,
                    email: response.data.email,
                    fullname: response.data.fullname,
                    password: response.data.password,
                    created_at: response.data.created_at,
                    roles: response.data.roles
                };

                const auxUser = [...props.users, items];

                props.setUsers(auxUser);

                reset();

                setShowAdd(false);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    // @ts-ignore
    return (
        <div>
            <button
                className="inline-block rounded border border-primary py-2 px-6 text-primary hover:bg-primary hover:text-white mb-8"
                type="button"
                onClick={() => setShowAdd(true)}
            >
                <i className="fas fa-plus-circle"/> Crear un usuario
            </button>
            {showAdd ? (
                <div
                    className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90"
                >
                    <div
                        className="w-full max-w-[870px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
                    >
                        <h3 className="pb-2 text-xl font-bold text-dark sm:text-2xl">
                            Crear un usuario
                        </h3>
                        <span className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary">
                        </span>
                        <form onSubmit={handleSubmit(saveUser)}>
                            <div className="-mx-4 flex flex-wrap">
                                <div className="w-full px-4 md:w-1/1 lg:w-1/1">
                                    <div className="mb-12">
                                        <label
                                            htmlFor="role_id"
                                            className="mb-3 block text-base font-medium text-black"
                                        >
                                            Roles
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="role_id"
                                                {...register("role_id", {required: true})}
                                                className="w-full appearance-none rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color outline-none transition focus:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                            >
                                                <option value="">Seleccione una opción</option>
                                                {roles && roles.map((role) => (
                                                    <option value={role.id}>{role.description}</option>
                                                ))}
                                            </select>
                                            <span
                                                className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color">

                                            </span>
                                        </div>
                                        {errors.role_id?.type === 'required' &&
                                            <span className="text-danger"> Este campo es obligatorio</span>}
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2 lg:w-1/2">
                                    <div className="mb-12">
                                        <label htmlFor="username"
                                               className="mb-3 block text-base font-medium text-black">
                                            Usuario
                                        </label>
                                        <input
                                            id="username"
                                            placeholder="Usuario"
                                            type="text"
                                            {...register("username", {
                                                required: true,
                                                validate: usernameIsUnique
                                            })}
                                            className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                        />
                                        {errors.username?.type === 'required' &&
                                            <span className="text-danger"> Este campo es obligatorio</span>}
                                        {errors.username && errors.username.type === "validate" &&
                                            <span className="text-danger"> Este usuario ya existe</span>}
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2 lg:w-1/2">
                                    <div className="mb-12">
                                        <label htmlFor="email"
                                               className="mb-3 block text-base font-medium text-black">
                                            Correo electrónico
                                        </label>
                                        <input
                                            id="email"
                                            placeholder="Correo electrónico"
                                            type="text"
                                            {...register("email", {
                                                required: true,
                                                pattern: {
                                                    value: /\S+@\S+\.\S+/,
                                                    message: "El valor ingresado no coincide con el formato del correo electrónico"
                                                },
                                                validate: emailIsUnique
                                            })}
                                            className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                        />
                                        {errors.email?.type === 'required' &&
                                            <span className="text-danger"> Este campo es obligatorio</span>}
                                        {errors.email && errors.email.type === "validate" &&
                                            <span className="text-danger"> Esta dirección de correo electrónico ya existe</span>}
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2 lg:w-1/2">
                                    <div className="mb-12">
                                        <label htmlFor="fullname"
                                               className="mb-3 block text-base font-medium text-black">
                                            Nombre completo
                                        </label>
                                        <input
                                            id="fullname"
                                            placeholder="Nombre completo"
                                            type="text"
                                            {...register("fullname", {required: true})}
                                            className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                        />
                                        {errors.fullname?.type === 'required' &&
                                            <span className="text-danger"> Este campo es obligatorio</span>}
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2 lg:w-1/2">
                                    <div className="mb-12">
                                        <label htmlFor="password"
                                               className="mb-3 block text-base font-medium text-black">
                                            Contraseña
                                        </label>
                                        <input
                                            id="password"
                                            placeholder="Contraseña"
                                            type="password"
                                            {...register("password", {required: true})}
                                            className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                        />
                                        {errors.password?.type === 'required' &&
                                            <span className="text-danger"> Este campo es obligatorio</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-1/2 px-3">
                                    <button
                                        onClick={() => setShowAdd(false)}
                                        className="block w-full rounded-lg border p-3 text-center text-base font-medium border-red-600 bg-red-600 text-white transition hover:bg-opacity-90"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                                <div className="w-1/2 px-3">
                                    <button
                                        className="block w-full rounded-lg border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                                    >
                                        Crear
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default UserAddComponent
