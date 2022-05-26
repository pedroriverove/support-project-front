export default interface UserInterface {

    id: number,
    role_id: number,
    username: string,
    email: string,
    fullname: string,
    password: string,
    created_at?: string | null,
    roles: any,

}
