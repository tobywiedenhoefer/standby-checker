import {View, ViewProps} from "react-native"

import Ticket from "@/types/Ticket.type"
import Airline from "@/types/Airline.type"
import Flights from "@/types/Flight.type"

import Label from "@/components/text/Label"

import {tripCardStyles} from "@/constants/styling";

type TicketCardProps = {
    ticket: Ticket
} & ViewProps
export default function TicketCard(props: TicketCardProps) {
    const flightsArr: Flights[] = Object.values(props.ticket.flights)
    const layoverCount = flightsArr.length
    const airlines: Airline[] = flightsArr
        .map((flight) => flight.airline)
        .filter((airline, ind, arr) => arr.findIndex(otherAirline => airline.id === otherAirline.id) === ind)
    const countries: string[] = Object.values(props.ticket.flights)
        .map((flight, ind) => flight.destination[Object.keys(props.ticket.flights).length - 1 === ind ? "to" : "from"].country)
        .filter((country, ind, arr) => arr.findIndex(otherCountry => country === otherCountry) === ind)
    return (
        <View style={[tripCardStyles.shape]}>
            <View style={[tripCardStyles.topShelf]}>
                <View style={[tripCardStyles.sections]}>
                    <Label>Layovers</Label>
                    <Label>{layoverCount}</Label>
                </View>
                <View style={[tripCardStyles.sections]}>
                    <Label>Airlines</Label>
                    <Label>{airlines.length}</Label>
                </View>
                <View style={[tripCardStyles.sections]}>
                    <Label>Countries</Label>
                    <Label>{countries.length}</Label>
                </View>
            </View>
            <View style={[tripCardStyles.bottomShelf]}>
                <Label>See More</Label>
            </View>
        </View>
    )
}