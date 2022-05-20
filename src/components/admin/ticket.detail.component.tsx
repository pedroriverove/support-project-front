import React, { useEffect, useState } from 'react';
import TicketInterface from '@/interfaces/ticket.interface';
import TicketService from '@/services/ticket.service';

const TicketDetailComponent = (props: any) => {
    const [showDetail, setShowDetail] = React.useState(false);

    const initialTicketState = {
        id: 0,
        creator_user_id: 0,
        assigned_user_id: null,
        status_id: 0,
        name: "",
        description: null,
        assignment_date: null,
        resolution_date: null,
        userCreator: null,
        userAssigned: null,
        status: null,
    };

    const [ticket, setTicket] = useState<TicketInterface>(initialTicketState);

    useEffect(() => {
        retrieveTickets()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const retrieveTickets = () => {
        TicketService.get(props.ticketId)
            .then((response: any) => {
                setTicket(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return (
        <div>
            <button
                className="inline-flex items-center justify-center rounded-lg bg-primary py-2 px-4 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                type="button"
                onClick={() => setShowDetail(true)}
            >
                <i className="far fa-eye"/>
            </button>
            {showDetail ? (
                <div
                    className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90"
                >
                    <div
                        className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
                    >
                        <h3 className="pb-2 text-xl font-bold text-dark sm:text-2xl">
                            Ver un ticket
                        </h3>
                        <span className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary">
                        </span>
                        {ticket &&
                            <div>
                                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                                    {ticket.name}
                                </h2>
                                <p className="mb-8 text-base text-body-color">
                                    <strong>Usuario:</strong> {ticket.userAssigned.fullname}
                                </p>
                                <p className="mb-8 text-base text-body-color">
                                    <strong>Estatus:</strong> {ticket.status.name}
                                </p>
                                <p className="mb-8 text-base text-body-color">
                                    <strong>Descripción:</strong> {ticket.description}
                                </p>
                                <p className="mb-8 text-base text-body-color">
                                    <strong>Fecha asignación:</strong> {ticket.assignment_date}
                                </p>
                                <p className="mb-8 text-base text-body-color">
                                    <strong>Fecha resolucion:</strong> {ticket.resolution_date}
                                </p>
                            </div>
                        }
                        <button
                            onClick={() => setShowDetail(false)}
                            className="block w-full rounded-lg border p-3 text-center text-base font-medium border-red-600 bg-red-600 text-white transition hover:bg-opacity-90"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default TicketDetailComponent
