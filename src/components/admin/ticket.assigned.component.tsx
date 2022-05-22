import React, { useEffect, useState } from 'react';
import TicketService from '@/services/ticket.service';
import TicketInterface from '@/interfaces/ticket.interface';

const TicketAssignedComponent: React.FC = () => {
    const [tickets, setTickets] = useState<Array<TicketInterface>>([]);

    useEffect(() => {
        retrieveTickets();
    }, []);

    const retrieveTickets = () => {
        TicketService.getAll()
            .then((response: any) => {
                setTickets(response.data);
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
                                {tickets && tickets.map((ticket, index) => (
                                    <tr>
                                        <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            1
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                            4
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            3
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium text-dark">
                                            0
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            0
                                        </td>
                                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark">
                                            8
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TicketAssignedComponent
