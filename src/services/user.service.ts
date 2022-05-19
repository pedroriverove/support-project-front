import http from '@/http-common';
import UserInterface from "@/interfaces/user.interface";

const getAll = () => {
    return http.get<Array<UserInterface>>("/v1/users");
};

const UserService = {
    getAll
};

export default UserService;
