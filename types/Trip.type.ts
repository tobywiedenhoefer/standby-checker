import Destination from "@/types/Destination.type"
import Airline from "@/types/Airline.type"

type Trip = {
    id: string,
    airline: Airline,
    destination: Destination,
    time?: {
        travelTime: number,
        departure: number,
        arrival: number
    }
}
export default Trip
