import {TouchableOpacity, View, ViewProps} from "react-native"

import {buttonStyles, colorScheme} from "@/constants/styling"

import P from "@/components/text/P"

type ThemedButtonProps = {
    label: string,
    variant: "primary" | "secondary" | "tertiary",
    onPress: () => void,
    disabled?: boolean
} & ViewProps
export default function ThemedButton(props: ThemedButtonProps) {
    return (
        <TouchableOpacity onPress={props.onPress} style={[props.style]} disabled={props.disabled}>
            <View style={[buttonStyles.base, buttonStyles[props.variant]]}>
                <P>{props.label}</P>
            </View>
        </TouchableOpacity>
    )
}