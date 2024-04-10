import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Cards from './Components/Cards';

export default function App() {

  const charmandaData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: [ "Scratch", "Ember", "Growl", "Leer" ],
    weaknesses: [ "Water", "Rock" ],
  };

  const pikachuData = {
    name: "pikachu",
    image: require("./assets/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: [ "Quick Attack", "Thunderbolt", "Growl", "Tail Whip" ],
    weaknesses: [ "Ground" ],
  };
  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: [ "Tackle", "Water Gun", "Tail Whip", "Withdraw" ],
    weaknesses: [ "Elactric", "Grass" ],
  };
  const bulbasaur = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: [ "Tackle", "Vine WHip", "Growl", "Leech Seed" ],
    weaknesses: [ "Fire", "Ice", "FLying", "Psychic" ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor= "black" barStyle={"light-content"} />
      <ScrollView>
        <Cards { ...charmandaData } />
        <Cards { ...pikachuData } />
        <Cards { ...squirtleData } />
        <Cards { ...bulbasaur } />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
