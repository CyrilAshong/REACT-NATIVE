import { View, Text, StyleSheet, Pressable, Alert, Modal, Button } from 'react-native';
import { useState } from 'react';

export default function Box({children, style}) {
    const [isMyModalVisible, setisMyModalVisible] = useState(false);
    return(
        <View style= {[styles.box, style]}>
            <View>
                <Pressable  onPress={() => Alert.alert("You have chosen " + children, "Do you wish to continue?", [
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
            <View> 
                <Button title='Click Me' onPress={() => setisMyModalVisible(true)} />
            </View>


            <Modal presentationStyle='pageSheet' animationType='slide' visible = {isMyModalVisible}>
                <View style= {{  flex: 1, backgroundColor: 'blue' }}>
                    <Text style= {styles.text}> Welcome to {children} </Text>
                    <Button title='Close' onPress={() => setisMyModalVisible(false)} backgroundColor= 'green' />
                </View>    
            </Modal>

        </View>

    
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        padding: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})