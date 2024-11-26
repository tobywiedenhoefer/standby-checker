import {StyleSheet} from "react-native"

export const textStyle = StyleSheet.create({
    base: {color: "black"},
    p: {fontSize: 24},
    h5: {fontSize: 30},
    h4: {fontSize: 36},
    h3: {fontSize: 42},
    h2: {fontSize: 48},
    h1: {fontSize: 54},
    label: {fontSize: 16},
})

export const colorScheme = StyleSheet.create({
    light: {backgroundColor: "#ECEDEE"}
})

export const buttonStyles = StyleSheet.create({
    base: {
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
    },
    primary: {},
    secondary: {},
    tertiary: {},
})