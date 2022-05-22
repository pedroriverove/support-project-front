import React, {useEffect, useState} from 'react';
import TicketFactory from '@/factories/ticket.factory';
import TicketService from '@/services/ticket.service';
import UserInterface from '@/interfaces/user.interface';
import UserService from '@/services/user.service';
import { useForm } from 'react-hook-form';
import TicketInterface from "@/interfaces/ticket.interface";

const TicketEditComponent: React.FC<any> = (props) => {
    const [showEdit, setShowEdit] = useState<boolean>(false);

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

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues: { assigned_user_id: "", name: "", description: "" },
    });

    useEffect(() => {
        retrieveTicket()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reset]);

    const retrieveTicket = () => {
        TicketService.get(props.ticketId)
            .then((response: any) => {
                reset(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const updateTicket = (data: any) => {
        const ticket: TicketFactory = {
            creator_user_id: 1,
            assigned_user_id: data.assigned_user_id,
            status_id: 1,
            name: data.name,
            description: data.description,
            assignment_date: "2022-05-19",
            resolution_date: null
        };

        TicketService.update(props.ticketId, ticket)
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

                let auxTickets: Array<TicketInterface> = [...props.tickets];

                const index = auxTickets.findIndex((auxTickets: TicketInterface) => {
                    return auxTickets.id === props.ticketId
                });

                if (index !== -1) {
                    auxTickets[index] = items;
                }

                props.setTickets(auxTickets);

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
                className="inline-flex items-center justify-center rounded-lg bg-danger py-2 px-2 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-2 xl:px-4"
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
                            Editar un ticket
                        </h3>
                        <span className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary">
                        </span>
                        <form onSubmit={handleSubmit(updateTicket)}>
                            <div className="-mx-4 flex flex-wrap">
                                <div className="w-full px-4 md:w-1/1 lg:w-1/1">
                                    <div className="mb-12">
                                        <label
                                            htmlFor="assigned_user_id"
                                            className="mb-3 block text-base font-medium text-black"
                                        >
                                            Usuarios
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="assigned_user_id"
                                                {...register("assigned_user_id", {required: true})}
                                                className="w-full appearance-none rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color outline-none transition focus:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                            >
                                                <option value="">Seleccione una opción</option>
                                                {users && users.map((user) => (
                                                    <option value={user.id}>{user.fullname}</option>
                                                ))}
                                            </select>
                                            <span
                                                className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color">
                                            </span>
                                            {errors.assigned_user_id?.type === 'required' &&
                                                <span className="text-danger"> Este campo es obligatorio</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/1 lg:w-1/1">
                                    <div className="mb-12">
                                        <label htmlFor="name"
                                               className="mb-3 block text-base font-medium text-black">
                                            Nombre del ticket
                                        </label>
                                        <input
                                            id="name"
                                            placeholder="Nombre del ticket"
                                            type="text"
                                            {...register("name", {required: true})}
                                            className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                        />
                                        {errors.name?.type === 'required' &&
                                            <span className="text-danger"> Este campo es obligatorio</span>}
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/1 lg:w-1/1">
                                    <div className="mb-12">
                                        <label htmlFor="description"
                                               className="mb-3 block text-base font-medium text-black">
                                            Descripción
                                        </label>
                                        <input
                                            id="description"
                                            placeholder="Descripción"
                                            type="text"
                                            {...register("description", {required: true})}
                                            className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                        />
                                        {errors.description?.type === 'required' &&
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

export default TicketEditComponent
