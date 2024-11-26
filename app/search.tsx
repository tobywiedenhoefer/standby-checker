import {View} from "react-native"
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"

import {useLocalSearchParams} from "expo-router"

import P from "@/components/text/P"

export default function Search() {
    const params = useLocalSearchParams()
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1, marginHorizontal: "5%"}}>
                <P>Search</P>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}