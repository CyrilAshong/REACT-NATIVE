import { View, Text, StyleSheet, StatusBar } from 'react-native';


export default function App() {
  return(
    <View style={styles.container}>
      <StatusBar backgroundColor= 'green' barStyle= 'dark-content' />
      <View style= {[styles.box, styles.blueBg]}>
        <Text style= {styles.text}>Blue Stylesheet API</Text>
      </View>
      <View style= {[styles.box, styles.lightgreenBg]}>
        <Text style= {styles.text}>Green Stylesheet API</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'plum', padding: 60 },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  box: {
    backgroundColor: 'green',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    width: 100,
  },
  blueBg: {
    backgroundColor:'blue',
  },
  lightgreenBg: {
    backgroundColor: 'lightgreen',
  },
})