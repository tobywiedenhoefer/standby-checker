import {Modal, ModalProps, StyleSheet, TouchableOpacity, View} from "react-native"

type ThemedModalProps = {
    setModalInvisible: () => void
} & ModalProps
export default function ThemedModal(props: ThemedModalProps) {
    return (
        <Modal
            animationType="slide"
            visible={props.visible}
            onRequestClose={() => {
                props.setModalInvisible();
            }}
            transparent
        >
            <TouchableOpacity
                style={styles.centered}
                onPressOut={() => {
                    props.setModalInvisible()
                }}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.background, props.style]}
                >
                    {props.children}
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        width: "95%",
        height: "80%",
        padding: "5%",
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})