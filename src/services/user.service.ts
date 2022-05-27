import HeaderService from '@/services/header.service';
import UpdateUserFactory from '@/factories/update.user.factory';
import UserFactory from '@/factories/user.factory';
import UserInterface from '@/interfaces/user.interface';
import http from '@/http-common';

const create = (data: UserFactory) => {
    return http.post<UserFactory>("/v1/users", data, {
        headers: HeaderService.getAuthHeader()
    });
};

const get = (id: number) => {
    return http.get<UserInterface>(`/v1/users/${id}`, {
        headers: HeaderService.getAuthHeader()
    });
};

const getAll = () => {
    return http.get<Array<UserInterface>>("/v1/users", {
        headers: HeaderService.getAuthHeader()
    });
};

const getAssignedUsers = (id: number) => {
    return http.get<UserInterface>(`/v1/assigned-users/${id}`, {
        headers: HeaderService.getAuthHeader()
    });
};

const getUserRoles = (name: string) => {
    return http.get<UserInterface>(`/v1/user-roles/${name}`, {
        headers: HeaderService.getAuthHeader()
    });
};

const update = (id: number, data: UpdateUserFactory) => {
    return http.put<any>(`/v1/users/${id}`, data, {
        headers: HeaderService.getAuthHeader()
    });
};

const validate = (field: string, value: string) => {
    const data = {
        field: field,
        value: value
    }

    return http.post<any>("/v1/users/validate", data, {
        headers: HeaderService.getAuthHeader()
    });
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
