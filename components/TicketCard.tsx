import {View, ViewProps} from "react-native"

import Ticket from "@/types/Ticket.type"

import H4 from "@/components/text/H4"
import Label from "@/components/text/Label"

import {tripCardStyles} from "@/constants/styling";

type TicketCardProps = {
    ticket: Ticket
} & ViewProps
export default function TicketCard(props: TicketCardProps) {
    return (
        <View style={[tripCardStyles.shape]}>
            <View style={[tripCardStyles.topShelf]}>
                <View style={[tripCardStyles.sections]}>
                    <Label>Layovers</Label>
                    <Label>{props.ticket.layovers}</Label>
                </View>
                <View style={[tripCardStyles.sections]}>
                    <Label>Airlines</Label>
                    <Label>{props.ticket.airlines.length}</Label>
                </View>
                <View style={[tripCardStyles.sections]}>
                    <Label>Countries</Label>
                    <Label>{props.ticket.countries.length}</Label>
                </View>
            </View>
            <View style={[tripCardStyles.bottomShelf]}>
                <Label>See More</Label>
            </View>
        </View>
    )
}