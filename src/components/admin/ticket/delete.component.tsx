import React from 'react';
import TicketService from '@/services/ticket.service';
import TicketInterface from '@/interfaces/ticket.interface';

const DeleteComponent: React.FC<any> = (props) => {
    const [showDelete, setShowDelete] = React.useState(false);

    const deleteTicket = () => {
        TicketService.remove(props.ticketId)
            .then((response: any) => {
                let auxTickets: Array<TicketInterface> = [...props.tickets];

                const index = auxTickets.findIndex((auxTickets: TicketInterface) => {
                    return auxTickets.id === props.ticketId
                });

                if (index !== -1) {
                    auxTickets.splice(index, 1);
                }

                props.setTickets(auxTickets);

                setShowDelete(false);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return (
        <div>
            <button
                className="inline-flex items-center justify-center rounded-lg bg-danger py-2 px-2 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-2 xl:px-4"
                type="button"
                onClick={() => setShowDelete(true)}
            >
                <i className="fa-regular fa-trash-can"/>
            </button>
            {showDelete ? (
                <div
                    className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90"
                >
                    <div
                        className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
                    >
                        <h3 className="pb-2 text-xl font-bold text-dark sm:text-2xl">
                            Eliminar un ticket
                        </h3>
                        <span className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary">
                        </span>
                        <p className="mb-10 text-base leading-relaxed text-body-color">
                            ¿Seguro que quiere eliminar este ticket?
                        </p>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-1/2 px-3">
                                <button
                                    onClick={() => setShowDelete(false)}
                                    className="block w-full rounded-lg border p-3 text-center text-base font-medium border-red-600 bg-red-600 text-white transition hover:bg-opacity-90"
                                >
                                    Cancelar
                                </button>
                            </div>
                            <div className="w-1/2 px-3">
                                <button
                                    onClick={deleteTicket}
                                    className="block w-full rounded-lg border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                                >
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default DeleteComponent
