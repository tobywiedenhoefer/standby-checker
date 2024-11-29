import Airport from "@/types/Airport.type"

type Destination = {
    id: string,
    city: string,
    state: string | null,
    country: string,
    airports: Airport[],
    // TODO: add prefecture/region?
}
export default Destination