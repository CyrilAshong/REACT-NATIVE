import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

export default function Box({children, style}) {
    return(
        <View style= {[styles.box, style]}>
            <Pressable onPress={() => Alert.alert("You have chosen " + children, "Do you wish to continue?", [
                {
                    text: "Cancel",
                    onPress: () => console.log("Canceled " + children),
                },
                {
                    text: "Proceed",
                    onPress: () => console.log("Proceeded with " + children),
                },
            ])}>
                <Text style= {styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 2.5,
        padding: 20,
        margin: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})