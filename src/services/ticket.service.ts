import http from '@/http-common';
import TicketModel from "@/models/ticket.model";

class TicketService {
    getAll = () => {
        return http.get<Array<TicketModel>>("/v1/tickets");
    };

    get = (id: any) => {
        return http.get<TicketModel>(`/v1/tickets/${id}`);
    };

    create = (data: TicketModel) => {
        return http.post<TicketModel>("/v1/tickets", data);
    };

    update = (id: any, data: TicketModel) => {
        return http.put<any>(`/v1/tickets/${id}`, data);
    };

    remove = (id: any) => {
        return http.delete<any>(`/v1/tickets/${id}`);
    };
}

export default TicketService;
