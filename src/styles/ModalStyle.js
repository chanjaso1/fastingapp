import { StyleSheet } from "react-native";

const ModalStyle = StyleSheet.create ({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 20
    },

    header: {
     //   width: '80%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.75)'
    }
}) ;

export default ModalStyle