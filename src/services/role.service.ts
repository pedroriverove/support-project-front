import http from '@/http-common';
import RoleInterface from '@/interfaces/role.interface';

const getAll = () => {
    return http.get<Array<RoleInterface>>("/v1/roles");
};

const UserService = {
    getAll
};

export default UserService;
