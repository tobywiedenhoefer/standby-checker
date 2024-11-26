import {USE_MOCK_DATA, ALL_MOCK_DATA} from "@/constants/mockData";

import getDestinations from "@/services/getDestinations"

export default function getDestinationNameById(id: number): string {
    if (USE_MOCK_DATA) {
        const data = getDestinations()
        let i = 0
        while (i<data.length) {
            const row = data[i]
            if (row.id === id) {
                return row.title
            }
            i++
        }
    }
    return ""
}