import {USE_MOCK_DATA, ALL_MOCK_DATA} from "@/constants/mockData"

import {FlatListData} from "@/components/SearchList";

export default function getDestinations(): FlatListData[] {
    // Get destinations for flatmap
    if (USE_MOCK_DATA) {
        const titleSet = new Set()
        const res: FlatListData[] = []
        ALL_MOCK_DATA.forEach((row) => {
            const cityState = row.state ? `${row.destination}, ${row.state}` : row.destination
            const title = `${cityState}, ${row.country} - ${row.airportCode}`
            if (!titleSet.has(title)) {
                res.push({
                    id: row.id,
                    title: title
                })
                titleSet.add(title)
            }
        })
        return res
    }
    return []
}
