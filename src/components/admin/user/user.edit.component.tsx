import React, {useEffect, useState} from 'react';
import RoleInterface from '@/interfaces/role.interface';
import RoleService from '@/services/role.service';
import UpdateUserFactory from '@/factories/update.user.factory';
import UserInterface from '@/interfaces/user.interface';
import UserService from '@/services/user.service';
import {useForm} from 'react-hook-form';

const UserEditComponent: React.FC<any> = (props) => {
    const [showEdit, setShowEdit] = useState<boolean>(false);

    const [roles, setRoles] = useState<Array<RoleInterface>>([]);

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

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues: {role_id: "", fullname: ""},
    });

    useEffect(() => {
        retrieveUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reset]);

    const retrieveUser = () => {
        UserService.get(props.userId)
            .then((response: any) => {
                reset(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const updateUser = (data: any) => {
        const user: UpdateUserFactory = {
            role_id: data.role_id,
            fullname: data.fullname
        };

        UserService.update(props.userId, user)
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

                let auxUsers: Array<UserInterface> = [...props.users];

                const index = auxUsers.findIndex((auxUsers: UserInterface) => {
                    return auxUsers.id === props.userId
                });

                if (index !== -1) {
                    auxUsers[index] = items;
                }

                props.setUsers(auxUsers);

                reset();

                setShowEdit(false);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return (
        <div>
            <button
                className="inline-flex items-center justify-center rounded-lg bg-success py-2 px-2 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-2 xl:px-4"
                type="button"
                onClick={() => setShowEdit(true)}
            >
                <i className="far fa-edit"/>
            </button>
            {showEdit ? (
                <div
                    className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90"
                >
                    <div
                        className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
                    >
                        <h3 className="pb-2 text-xl font-bold text-dark sm:text-2xl">
                            Editar un usuario
                        </h3>
                        <span className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary">
                        </span>
                        <form onSubmit={handleSubmit(updateUser)}>
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
                                            {errors.role_id?.type === 'required' &&
                                                <span className="text-danger"> Este campo es obligatorio</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/1 lg:w-1/1">
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
                            </div>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-1/2 px-3">
                                    <button
                                        onClick={() => setShowEdit(false)}
                                        className="block w-full rounded-lg border p-3 text-center text-base font-medium border-red-600 bg-red-600 text-white transition hover:bg-opacity-90"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                                <div className="w-1/2 px-3">
                                    <button
                                        className="block w-full rounded-lg border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                                    >
                                        Editar
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

export default UserEditComponent
