import { StyleSheet, Platform } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 0,
        paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0
    },

    boxTitle: {
        marginTop: 50,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: "#333"
    },

    list: {
        marginTop: 30
    },

    file: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20
    },

    separator: {
        height: 1,
        backgroundColor: "#EEE"
    },

    fileInfo: {
        flexDirection: "row",
        alignItems: "center"
    },

    fileTitle: {
        fontSize: 16,
        color: "#333",
        marginLeft: 10
    },

    fileDate: {
        fontSize: 14,
        color: "#666"
    },

    fab: {
        position: "absolute",
        right: 30,
        bottom: -100,
        width: 60,
        height: 60,
        backgroundColor: "#007EE5",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default styles;