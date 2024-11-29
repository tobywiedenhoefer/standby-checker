import {View, ViewProps} from "react-native"

import Label from "@/components/text/Label"

import {colorScheme, labelRowStyles} from "@/constants/styling"


type LabelRowProps = {
    label: string,
    isError?: boolean
} & ViewProps
export default function LabelRow(props: LabelRowProps) {
    return (
        <View
            style={[labelRowStyles.shape, props.style, props.isError ? {borderColor: colorScheme.light.errorBorderColor} : {}]}
        >
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
