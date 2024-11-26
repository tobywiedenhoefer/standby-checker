import {Text, TextProps} from "react-native"

import {textStyle} from "@/constants/styling"

export type PProps = {} & TextProps
export default function P(props: PProps) {
    return (
        <Text {...props} style={[props.style, textStyle.base, textStyle.p]}/>
    )
}
