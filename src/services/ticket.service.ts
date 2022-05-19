import http from '@/http-common';
import TicketInterface from '@/interfaces/ticket.interface';
import TicketFactory from '@/factories/ticket.factory';

const getAll = () => {
    return http.get<Array<TicketInterface>>("/v1/tickets");
};

const get = (id: number) => {
    return http.get<TicketInterface>(`/v1/tickets/${id}`);
};

const create = (data: TicketFactory) => {
    return http.post<TicketFactory>("/v1/tickets", data);
};

const update = (id: number, data: TicketFactory) => {
    return http.put<any>(`/v1/tickets/${id}`, data);
};

const remove = (id: number) => {
    return http.delete<any>(`/v1/tickets/${id}`);
};

const TicketService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default TicketService;
