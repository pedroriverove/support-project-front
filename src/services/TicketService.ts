import http from '@/http-common';
import TicketInterface from "@/models/Ticket";

const getAll = () => {
    return http.get<Array<TicketInterface>>("/v1/tickets");
};

const get = (id: any) => {
    return http.get<TicketInterface>(`/v1/tickets/${id}`);
};

const create = (data: TicketInterface) => {
    return http.post<TicketInterface>("/v1/tickets", data);
};

const update = (id: any, data: TicketInterface) => {
    return http.put<any>(`/v1/tickets/${id}`, data);
};

const remove = (id: any) => {
    return http.delete<any>(`/v1/tickets/${id}`);
};

const TicketService = {
    getAll,
    get,
    create,
    update,
    remove,
};

export default TicketService;
