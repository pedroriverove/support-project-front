export default interface TicketInterface {

    id: number,
    creator_user_id: number,
    assigned_user_id?: number | null,
    status_id: number,
    name: string,
    description?: string | null,
    assignment_date?: string | null,
    resolution_date?: string | null,
    userCreator?: any | null,
    userAssigned?: any | null,
    status?: any | null,

}
