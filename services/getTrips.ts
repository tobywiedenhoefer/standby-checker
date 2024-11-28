import { USE_MOCK_DATA, MOCK_FLIGHTS } from "@/constants/mockData";

import Destination from "@/types/Destination.type";
import Trip from "@/types/Trip.type";

export default function getTrips(fromId: Destination["id"], toId: Destination["id"]): Trip[] {
    if (USE_MOCK_DATA) {
        return []
    }
    return []
}