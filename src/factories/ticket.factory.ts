export default interface TicketFactory {

    creator_user_id: number,
    assigned_user_id: number,
    status_id: number,
    name: string,
    description: string,
    assignment_date: string,
    resolution_date: string,

}
