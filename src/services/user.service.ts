import http from '@/http-common';
import UpdateUserFactory from "@/factories/update.user.factory";
import UserFactory from "@/factories/user.factory";
import UserInterface from '@/interfaces/user.interface';

const create = (data: UserFactory) => {
    return http.post<UserFactory>("/v1/users", data);
};

const get = (id: number) => {
    return http.get<UserInterface>(`/v1/users/${id}`);
};

const getAll = () => {
    return http.get<Array<UserInterface>>("/v1/users");
};

const getAssignedUsers = () => {
    return http.get<UserInterface>("/v1/assigned-users");
};

const getUserRoles = (name: string) => {
    return http.get<UserInterface>(`/v1/user-roles/${name}`);
};

const update = (id: number, data: UpdateUserFactory) => {
    return http.put<any>(`/v1/users/${id}`, data);
};

const validate = (field: string, value: string) => {
    const data = {
        field: field,
        value: value
    }

    return http.post<any>("/v1/users/validate", data);
};

const UserService = {
    create,
    get,
    getAll,
    getAssignedUsers,
    getUserRoles,
    update,
    validate
};

export default UserService;
