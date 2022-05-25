import http from '@/http-common';
import UserInterface from '@/interfaces/user.interface';
import TicketInterface from '@/interfaces/ticket.interface';

const getAll = () => {
    return http.get<Array<UserInterface>>("/v1/users");
};

const getAssigned = () => {
    return http.get<TicketInterface>("/v1/users/assigned");
};

const getRole = (name: string) => {
    return http.get<TicketInterface>(`/v1/users/${name}`);
};

const UserService = {
    getAll,
    getAssigned,
    getRole
};

export default UserService;
