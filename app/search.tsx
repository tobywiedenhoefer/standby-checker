import {useEffect, useState} from "react"
import {View, FlatList} from "react-native"
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"
import {useLocalSearchParams, router} from "expo-router"
import Feather from "@expo/vector-icons/Feather";

import TicketCard from "@/components/TicketCard";

import Ticket from "@/types/Ticket.type";

import getTickets from "@/services/getTickets";

import {textStyle} from "@/constants/styling";


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
            <SafeAreaView style={{flex: 1}}>
                <View style={{padding: 15}}>
                    <Feather
                        name="arrow-left"
                        onPress={() => router.back()}
                        size={textStyle.p.fontSize}
                    >
                        Back
                    </Feather>
                </View>
                <View style={{flex: 1, alignItems: "center"}}>
                    <FlatList
                        data={tickets}
                        renderItem={({item}) => (
                            <TicketCard
                                ticket={item}
                                key={item.id}
                                style={{
                                    marginVertical: 10,
                                }}
                            />
                        )}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}