import {View, ViewProps} from "react-native"

import Label from "@/components/text/Label"

import {colorScheme} from "@/constants/styling"


type LabelRowProps = {
    label: string
} & ViewProps
export default function LabelRow(props: LabelRowProps) {
    return (
        <View style={[{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 15,
            paddingVertical: 15
        }, props.style]}>
            <View style={{
                width: "100%",
                paddingHorizontal: 15
            }}>
                {props.children ?? null}
            </View>
            <View style={{
                position: "absolute",
                transform: [{translateX: 20}, {translateY: 28}],
                backgroundColor: colorScheme.light.backgroundColor
            }}>
                <Label>{props.label}</Label>
            </View>
        </View>
    )
}
