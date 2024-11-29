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

export const colorScheme = {
    light: {
        backgroundColor: "#ECEDEE",
        backgroundAccentColor: "gray",
        foregroundColor: "white",
        errorBorderColor: "red"
    }
}

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

export const labelRowStyles = StyleSheet.create({
    shape: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 15,
    }
})

export const tripCardStyles = StyleSheet.create({
    shape: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 1,
        backgroundColor: colorScheme.light.foregroundColor,
        borderRadius: 15,
        marginHorizontal: 25,
        minWidth: 300,
    },
    topShelf: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 5,
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
    },
    middleShelf: {
        flexDirection: "column",
    },
    toFromText: {
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    bottomShelf: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        padding: 5,
        backgroundColor: colorScheme.light.backgroundAccentColor
    },
    sections: {
        width: "33%",
        alignItems: "center",
    }
})