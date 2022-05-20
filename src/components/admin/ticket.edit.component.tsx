import React, { ChangeEvent, useEffect, useState } from 'react';
import TicketFactory from '@/factories/ticket.factory';
import TicketService from '@/services/ticket.service';
import UserInterface from '@/interfaces/user.interface';
import UserService from '@/services/user.service';
import { useNavigate } from 'react-router-dom';

const TicketEditComponent = (props: any) => {
    let navigate = useNavigate();

    const [showEdit, setShowEdit] = useState<boolean>(false);
    const [users, setUsers] = useState<Array<UserInterface>>([]);

    useEffect(() => {
        retrieveUsers();
    }, []);

    const retrieveUsers = () => {
        UserService.getAll()
            .then((response: any) => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const initialTicketState = {
        creator_user_id: null,
        assigned_user_id: "",
        status_id: null,
        name: "",
        description: "",
        assignment_date: "",
        resolution_date: "",
    };

    const [ticket, setTicket] = useState<TicketFactory>(initialTicketState);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        setTicket({...ticket, [name]: value});
    };

    const saveTicket = () => {
        let data = {
            creator_user_id: 1,
            assigned_user_id: ticket.assigned_user_id,
            status_id: 1,
            name: ticket.name,
            description: ticket.description,
            assignment_date: "2022-05-19",
            resolution_date: "2022-05-19"
        };

        TicketService.create(data)
            .then((response: any) => {
                setTicket({
                    creator_user_id: response.data.creator_user_id,
                    assigned_user_id: response.data.assigned_user_id,
                    status_id: response.data.status_id,
                    name: response.data.name,
                    description: response.data.description,
                    assignment_date: response.data.assignment_date,
                    resolution_date: response.data.resolution_date,
                });
                setSubmitted(true);
                setShowEdit(false);
                navigate("/tickets");
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    return (
        <div>
            <button
                className="inline-flex items-center justify-center rounded-lg bg-danger py-2 px-4 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
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
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4 md:w-1/1 lg:w-1/1">
                                <div className="mb-12">
                                    <label htmlFor="assigned_user_id"
                                           className="mb-3 block text-base font-medium text-black">
                                        Usuarios
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="assigned_user_id"
                                            name="assigned_user_id"
                                            onChange={handleInputChange}
                                            value={ticket.assigned_user_id}
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
                                        name="name"
                                        onChange={handleInputChange}
                                        placeholder="Nombre del ticket"
                                        type="text"
                                        value={ticket.name}
                                        className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                    />
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
                                        name="description"
                                        onChange={handleInputChange}
                                        placeholder="Descripción"
                                        type="text"
                                        value={ticket.description}
                                        className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                                    />
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
                                    onClick={saveTicket}
                                    className="block w-full rounded-lg border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                                >
                                    Editar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default TicketEditComponent
