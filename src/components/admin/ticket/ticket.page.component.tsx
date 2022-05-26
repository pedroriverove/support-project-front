import React, {useEffect, useState} from 'react';
import Filter from '@/utils/filter';
import TicketAddComponent from '@/components/admin/ticket/ticket.add.component';
import TicketDeleteComponent from '@/components/admin/ticket/ticket.delete.component';
import TicketDetailComponent from '@/components/admin/ticket/ticket.detail.component';
import TicketEditComponent from '@/components/admin/ticket/ticket.edit.component';
import TicketInterface from '@/interfaces/ticket.interface';
import TicketService from '@/services/ticket.service';

const TicketPageComponent = () => {
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

    console.log('pedro', tickets)

    return (
        <section className="bg-white py-20 lg:py-[120px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="max-w-full overflow-x-auto">
                            <TicketAddComponent
                                tickets={tickets}
                                setTickets={setTickets}
                            />
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
                                                <div className="mx-6 text-center md:text-left">
                                                    <div
                                                        className="grid grid-1 sm:grid-cols-6 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                                        <div className="">
                                                            <TicketEditComponent
                                                                key={ticket.id}
                                                                ticketId={ticket.id}
                                                                tickets={tickets}
                                                                setTickets={setTickets}
                                                            />
                                                        </div>
                                                        <div className="">
                                                            <TicketDeleteComponent
                                                                key={ticket.id}
                                                                ticketId={ticket.id}
                                                                tickets={tickets}
                                                                setTickets={setTickets}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div className="flex flex-wrap justify-center">
                                                    <TicketDetailComponent
                                                        key={ticket.id}
                                                        ticketId={ticket.id}
                                                    />
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

export default TicketPageComponent
