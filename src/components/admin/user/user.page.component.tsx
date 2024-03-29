import React, {useEffect, useState} from 'react';
import Filter from '@/utils/filter';
import UserAddComponent from '@/components/admin/user/user.add.component';
import UserDetailComponent from '@/components/admin/user/user.detail.component';
import UserEditComponent from '@/components/admin/user/user.edit.component';
import UserInterface from '@/interfaces/user.interface';
import UserService from '@/services/user.service';

const UserPageComponent = () => {
    const [users, setUsers] = useState<Array<UserInterface>>([]);

    useEffect(() => {
        retrieveUsers();
    }, []);

    const retrieveUsers = () => {
        UserService.getAll()
            .then((response: any) => {
                setUsers(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return (
        <section className="bg-white py-20 lg:py-[120px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="max-w-full overflow-x-auto">
                            <UserAddComponent
                                users={users}
                                setUsers={setUsers}
                            />
                            <table className="w-full table-auto">
                                <thead>
                                <tr className="bg-primary text-center">
                                    <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Rol
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Usuario
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Correo electrónico
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Nombre completo
                                    </th>
                                    <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Fecha de creación
                                    </th>
                                    <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Gestionar
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {users && users.map((user) => (
                                    <tr>
                                        <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            {user.roles.description}
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                            {user.username}
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            {user.email}
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            {user.fullname}
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                            {Filter.formatDate(user.created_at, 'LLL')}
                                        </td>
                                        <td className="border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                            <div className="mx-6 text-center md:text-left">
                                                <div
                                                    className="grid grid-1 sm:grid-cols-6 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                                    <div className="">
                                                        <UserEditComponent
                                                            key={user.id}
                                                            userId={user.id}
                                                            users={users}
                                                            setUsers={setUsers}
                                                        />
                                                    </div>
                                                    <div className="">
                                                        <UserDetailComponent
                                                            key={user.id}
                                                            userId={user.id}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {users.length === 0 &&
                                    <tr>
                                        <td colSpan={6}
                                            className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            No se encontraron resultados.
                                        </td>
                                    </tr>
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserPageComponent
