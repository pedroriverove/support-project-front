import HeaderService from '@/services/header.service';
import LoginFactory from '@/factories/login.factory';
import UserInterface from '@/interfaces/user.interface';
import http from '@/http-common';

const login = (data: LoginFactory) => {
    return http.post<LoginFactory>("/v1/auth/login", data);
};

const get = (id: number) => {
    return http.get<UserInterface>(`/v1/auth/${id}`, {
        headers: HeaderService.getAuthHeader()
    });
};

const AuthService = {
    login,
    get
};

export default AuthService;
