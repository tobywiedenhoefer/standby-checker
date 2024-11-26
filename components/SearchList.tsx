import React from "react"
import {FlatList, TextInput} from "react-native"

import {textStyle} from "@/constants/styling"

import P from "@/components/text/P"

export type FlatListData = {
    id: number,
    title: string,
}
export type SearchListProp = {
    data: FlatListData[],
    onPress: (data: FlatListData) => void
}
export default function SearchList(props: SearchListProp) {
    const [searchText, setSearchText] = React.useState("")
    return (
        <>
            <TextInput
                value={searchText}
                onChangeText={setSearchText}
                style={[{
                    borderWidth: 1,
                    borderRadius: 15,
                    marginVertical: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5
                }, textStyle.p, textStyle.base]}
                placeholder="Filter destinations..."
                placeholderTextColor={textStyle.base.color}
            />
            <FlatList
                data={props.data.filter((dest) => dest.title.toLowerCase().includes((searchText)))}
                renderItem={({item}) => {
                    return (
                        <P style={{paddingVertical: 10}}
                           onPress={() => {
                               props.onPress(item)
                               setSearchText("")
                           }}
                        >{item.title}</P>
                    )
                }}
            />
        </>
    )
}