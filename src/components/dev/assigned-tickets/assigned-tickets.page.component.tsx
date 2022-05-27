import React, {useEffect, useState} from 'react';
import Filter from '@/utils/filter';
import TicketInterface from '@/interfaces/ticket.interface';
import TicketService from '@/services/ticket.service';
import moment from 'moment';

const AssignedUsersPageComponent: React.FC = () => {
    const [tickets, setTickets] = useState<Array<TicketInterface>>([]);

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

            TicketService.getAssignedTickets(userID)
                .then((response: any) => {
                    setTickets(response.data);
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        }
    };

    const updateTicket = (ticket: TicketInterface) => {
        const factory: any = {
            creator_user_id: ticket.creator_user_id,
            assigned_user_id: ticket.assigned_user_id,
            status_id: 2,
            name: ticket.name,
            description: ticket.description,
            assignment_date: ticket.assignment_date,
            resolution_date: moment().format()
        };

        TicketService.update(ticket.id, factory)
            .then((response: any) => {
                const items = {
                    id: response.data.id,
                    creator_user_id: response.data.creator_user_id,
                    assigned_user_id: response.data.description,
                    status_id: response.data.status_id,
                    name: response.data.name,
                    description: response.data.description,
                    assignment_date: response.data.assignment_date,
                    resolution_date: response.data.resolution_date,
                    userCreator: response.data.userCreator,
                    userAssigned: response.data.userAssigned,
                    status: response.data.status
                };

                let auxTickets: Array<TicketInterface> = [...tickets];

                const index = auxTickets.findIndex((auxTickets: TicketInterface) => {
                    return auxTickets.id === ticket.id
                });

                if (index !== -1) {
                    auxTickets[index] = items;
                }

                setTickets(auxTickets);
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
                            <table className="w-full table-auto">
                                <thead>
                                <tr className="bg-primary text-center">
                                    <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Asignado
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Ticket
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Estatus
                                    </th>
                                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Fecha asignación
                                    </th>
                                    <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Fecha resolución
                                    </th>
                                    <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                                        Gestionar
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {tickets && tickets.map((ticket) => (
                                    <tr>
                                        <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            {ticket.userAssigned.fullname}
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                            {ticket.name}
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            {ticket.status.name}
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                            {Filter.formatDate(ticket.assignment_date, 'LLL')}
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            {Filter.formatDate(ticket.resolution_date, 'LLL')}
                                        </td>
                                        <td className="border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                            {ticket.status.name === 'Por resolver'
                                                ?
                                                <div className="flex flex-wrap justify-center">
                                                    <button
                                                        onClick={() => updateTicket(ticket)}
                                                        className="block w-full rounded-lg border border-success bg-success p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                                                    >
                                                        Resolver
                                                    </button>
                                                </div>
                                                :
                                                <div className="flex flex-wrap justify-center">
                                                    <button
                                                        disabled
                                                        className="block w-full rounded-lg border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                                                    >
                                                        Resuelto
                                                    </button>
                                                </div>
                                            }
                                        </td>
                                    </tr>
                                ))}
                                {tickets.length === 0 &&
                                    <tr>
                                        <td colSpan={6} className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
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
