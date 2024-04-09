import { View, Text, StyleSheet } from "react-native";


export default function Dimension({children, style}) {
    return(
        <View style= {styles.container} >
            <View style= {styles.box}>
                <Text style= {styles.text}>Welcome!!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        justifyContent: "center",
        alignItems: "center",

    },
    box: {
        width: 300,
        height: 300,
    },
    text: {
        fontSize: 24
    }

})