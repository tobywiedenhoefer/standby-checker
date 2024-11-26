import {TouchableOpacity, View, ViewProps} from "react-native"

import {buttonStyles} from "@/constants/styling"

import P from "@/components/text/P"

type ThemedButtonProps = {
    label: string,
    variant: "primary" | "secondary" | "tertiary",
    onPress: () => void
} & ViewProps
export default function ThemedButton(props: ThemedButtonProps) {
    return (
        <TouchableOpacity onPress={props.onPress} style={[props.style]}>
            <View style={[buttonStyles.base, buttonStyles[props.variant]]}>
                <P>{props.label}</P>
            </View>
        </TouchableOpacity>
    )
}