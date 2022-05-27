import React, {useEffect, useState} from 'react';
import AssignedInterface from '@/interfaces/assigned.interface';
import UserService from '@/services/user.service';

const AssignedUsersPageComponent: React.FC = () => {
    const [users, setUsers] = useState<Array<AssignedInterface>>([]);

    useEffect(() => {
        retrieveUsers();
    }, []);

    const retrieveUsers = () => {
        const userStr = localStorage.getItem("user");
        let storage: any = null;

        if (userStr) {
            storage = JSON.parse(userStr);
        }

        if (storage && storage.user.id) {
            const userID: number = storage.user.id;

            UserService.getAssignedUsers(userID)
                .then((response: any) => {
                    setUsers(response.data);
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        }
    };

    return (
        <section className="bg-white py-20 lg:py-[120px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="max-w-full overflow-x-auto">
                            <table className="w-full table-auto">
                                <thead>
                                <tr className="bg-primary text-center">
                                    <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Usuario
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        N° de tickets por resolver
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        N° de tickets resueltos
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        N° de tickets rechazados
                                    </th>
                                    <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        N° de tickets anulados
                                    </th>
                                    <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        N° de tickets totales
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {users && users.map((user) => (
                                    <tr>
                                        <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            {user.fullname}
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                            {user.countTicketsToBeSolved}
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            {user.countSolvedTickets}
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                            {user.countRejectedTickets}
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            {user.countCanceledTickets}
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            {user.countTotalTickets}
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

export default AssignedUsersPageComponent
