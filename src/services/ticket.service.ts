import HeaderService from '@/services/header.service';
import TicketFactory from '@/factories/ticket.factory';
import TicketInterface from '@/interfaces/ticket.interface';
import http from '@/http-common';

const create = (data: TicketFactory) => {
    return http.post<TicketFactory>("/v1/tickets", data, {
        headers: HeaderService.getAuthHeader()
    });
};

const get = (id: number) => {
    return http.get<TicketInterface>(`/v1/tickets/${id}`, {
        headers: HeaderService.getAuthHeader()
    });
};

const getAll = () => {
    return http.get<Array<TicketInterface>>("/v1/tickets", {
        headers: HeaderService.getAuthHeader()
    });
};

const getAssignedTickets = (id: number) => {
    return http.get<Array<TicketInterface>>(`/v1/assigned-tickets/${id}`, {
        headers: HeaderService.getAuthHeader()
    });
};

const remove = (id: number) => {
    return http.delete<any>(`/v1/tickets/${id}`, {
        headers: HeaderService.getAuthHeader()
    });
};

const update = (id: number, data: any) => {
    return http.put<any>(`/v1/tickets/${id}`, data, {
        headers: HeaderService.getAuthHeader()
    });
};

const TicketService = {
    create,
    get,
    getAll,
    getAssignedTickets,
    remove,
    update
};

export default TicketService;
