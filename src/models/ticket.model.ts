export default interface TicketModel {

    creator_user_id: number,
    assigned_user_id?: number | null,
    status_id: string,
    name: string,
    description?: string | null,
    assignment_date?: string | null,
    resolution_date?: string | null,

}
