import {Text, TextProps} from "react-native"

import {textStyle} from "@/constants/styling";

export type LabelProps = {} & TextProps
export default function Label(props: LabelProps) {
    return (
        <Text {...props} style={[props.style, textStyle.base, textStyle.label]}/>
    )
}