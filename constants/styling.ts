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
        foregroundColor: "white"
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

export const tripCardStyles = StyleSheet.create({
    shape: {
        width: "100%",
        maxWidth: 400,
        height: "20%",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1,
        backgroundColor: colorScheme.light.foregroundColor
    },
    topShelf: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: "80%",
    },
    bottomShelf: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "20%",
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        backgroundColor: colorScheme.light.backgroundAccentColor
    },
    sections: {
        width: "33%",
        alignItems: "center",
    }
})