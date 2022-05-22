export default interface TicketFactory {

    creator_user_id?: number | null,
    assigned_user_id: number | string,
    status_id?: number | null,
    name: string,
    description: string,
    assignment_date: string,
    resolution_date: string | null,

}
