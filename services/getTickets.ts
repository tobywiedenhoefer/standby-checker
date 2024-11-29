import {MOCK_TICKETS, USE_MOCK_DATA} from "@/constants/mockData";

import Destination from "@/types/Destination.type"
import Ticket from "@/types/Ticket.type";

export default function getTrips(fromId: Destination["id"], toId: Destination["id"]): Ticket[] {
    if (USE_MOCK_DATA) {
        return MOCK_TICKETS
            .filter((ticket) => {
                return ticket.flights[0].destination.from.id === fromId && ticket.flights[Object.keys(ticket.flights).length - 1].destination.to.id === toId
            })
    }
    return []
}