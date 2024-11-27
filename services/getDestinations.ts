import {USE_MOCK_DATA, MOCK_DESTINATIONS} from "@/constants/mockData"

import {FlatListData} from "@/components/SearchList";

export default function getDestinations(): FlatListData[] {
    // Get destinations for flatmap
    if (USE_MOCK_DATA) {
        return MOCK_DESTINATIONS.map((dest) => {
            return {
                id: dest.id,
                title: `${dest.airportCode} - ${dest.city}, ${dest.state ? dest.state + ", " : ""}${dest.country}`
            }
        })
    }
    return []
}
