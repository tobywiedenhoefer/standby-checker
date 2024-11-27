import { USE_MOCK_DATA, MOCK_FLIGHTS } from "@/constants/mockData";

import Destination from "@/types/Destination.type";
import Trip from "@/types/Trip.type";

export default function getTrips(fromId: Destination["id"], toId: Destination["id"]): Trip[] {
    if (USE_MOCK_DATA) {
        return MOCK_FLIGHTS
            .filter((flight) => flight.destination.from.id === fromId && flight.destination.to.id === toId)
            .map((flight) => {
                return {
                    id: flight.id,
                    layovers: 0,
                    airlines: [flight.airline.name],
                    countries: Array.from(new Set([flight.destination.from.country, flight.destination.to.country])),
                    destinations: {
                        fromCity: flight.destination.from.city,
                        toCity: flight.destination.to.city
                    }
                }
            })
    }
    return []
}