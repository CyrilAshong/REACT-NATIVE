import { View, Text, StyleSheet, useWindowDimensions } from "react-native";


export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowsHeight = useWindowDimensions().height;

    return(
        <View style= {styles.container} >
            <View style= {[ styles.box,
             {
              width: windowWidth > 500 ? "70%" : "90%",
              height: windowsHeight > 600 ? "70%" : "90%",
              }
               ]}>
                <Text style= {{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome!!</Text>
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue", 
    },
    
})





// import { Button, Modal, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
// import Box from './Components/Box';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor= 'green' barStyle= 'dark-content' />
//       {/* <ScrollView> */}
//         {/* <Text style= {{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', margin: 20 }} >WELCOME CULERS!</Text> */}
//         <Box style= {{ backgroundColor: 'red' }}>Box 1</Box>
//         <Box style= {{ backgroundColor: 'orange' }}>Box 2</Box>
//         <Box style= {{ backgroundColor: 'yellow' }}>Box 3</Box>
//         <Box style= {{ backgroundColor: 'green' }}>Box 4</Box>
//         <Box style= {{ backgroundColor: 'blue' }}>Box 5</Box>
//         <Box style= {{ backgroundColor: 'indigo' }}>Box 6</Box>
//         <Box style= {{ backgroundColor: 'violet' }}>Box 7</Box> 
//       {/* </ScrollView>   */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     height: 400,
//     flexWrap: 'wrap',
//     gap: 20,
//     marginTop: 64,
//     backgroundColor: 'plum',
//     borderColor: 'red',
//     borderWidth: 6,
//   },
// });
