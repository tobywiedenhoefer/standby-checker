import Flight from "@/types/Flight.type";

type Ticket = {
    id: string,
    flights: {[order: number]: Flight}
}
export default Ticket