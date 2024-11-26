import {Text, TextProps} from "react-native"

import {textStyle} from "@/constants/styling";

export default function H4(props: TextProps) {
    return <Text {...props} style={[props.style, textStyle.base, textStyle.h4]} />
}