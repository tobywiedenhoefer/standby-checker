import Destination from "@/types/Destination.type";
import Airline from "@/types/Airline.type"

type Flight = {
    id: string,
    airline: Airline,
    destination: {
        from: Destination,
        to: Destination
    }
}
export default Flight