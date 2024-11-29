import {useEffect, useState} from "react"

import {View} from "react-native"
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"

import {useLocalSearchParams} from "expo-router"

import P from "@/components/text/P"
import TicketCard from "@/components/TicketCard";

import Ticket from "@/types/Ticket.type";

import getTickets from "@/services/getTickets";


export default function Search() {
    const params = useLocalSearchParams()
    if (!params["toId"] || !params["fromId"]) {
        throw Error("toId and fromId are required!")
    }
    const [tickets, setTickets] = useState<Ticket[]>([])
    useEffect(() => {
        const fromId = typeof params.fromId === "string" ? params.fromId : ""
        const toId = typeof params.toId === "string" ? params.toId : ""
        const tickets = getTickets(fromId, toId)
        setTickets(tickets)
    }, [])
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1, marginHorizontal: "5%"}}>
                <P>Search</P>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    {tickets.map((ticket) => {
                        return (
                            <TicketCard key={ticket.id} ticket={ticket}/>
                        )
                    })}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}