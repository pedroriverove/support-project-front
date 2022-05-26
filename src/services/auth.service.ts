import http from '@/http-common';
import LoginFactory from "@/factories/login.factory";
import UserInterface from '@/interfaces/user.interface';

const login = (data: LoginFactory) => {
    return http.post<LoginFactory>("/v1/auth/login", data);
};

const get = (id: number) => {
    return http.get<UserInterface>(`/v1/users/${id}`);
};

const AuthService = {
    login,
    get
};

export default AuthService;
