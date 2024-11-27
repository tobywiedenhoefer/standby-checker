import {View, ViewProps} from "react-native"

import Trip from "@/types/Trip.type"

import H4 from "@/components/text/H4"
import Label from "@/components/text/Label"

import {tripCardStyles} from "@/constants/styling";

type TripCardProps = {
    trip: Trip
} & ViewProps
export default function TripCard(props: TripCardProps) {
    return (
        <View style={[tripCardStyles.shape]}>
            <View style={[tripCardStyles.topShelf]}>
                <View style={[tripCardStyles.sections]}>
                    <Label>Layovers</Label>
                    <Label>{props.trip.layovers}</Label>
                </View>
                <View style={[tripCardStyles.sections]}>
                    <Label>Airlines</Label>
                    <Label>{props.trip.airlines.length}</Label>
                </View>
                <View style={[tripCardStyles.sections]}>
                    <Label>Countries</Label>
                    <Label>{props.trip.countries.length}</Label>
                </View>
            </View>
            <View style={[tripCardStyles.bottomShelf]}>
                <Label>See More</Label>
            </View>
        </View>
    )
}