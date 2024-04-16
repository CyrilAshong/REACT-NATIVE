import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, FlatList, SectionList } from 'react-native';
import pokemonList from "./data.json";
import groupedPokemonList from "./grouped-data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        {/* <ScrollView style={styles.scrollview}>
        {
          pokemonList.map(pokemon => {
            return(
              <View style={styles.card} key={pokemon.id}>
                  <Text style={styles.name}> {pokemon.name} </Text>
                  <Text style={styles.type}> {pokemon.type} </Text>
              </View>
            )
          })
        }
        </ScrollView> */}
      <View style={styles.scrollview}>
        {/* <FlatList 
        // horizontal={true}
        data={pokemonList}
        renderItem={({item}) => {
          return(
            <View style={styles.card} key={item.id}>
                <Text style={styles.name}> {item.name} </Text>
                <Text style={styles.type}> {item.type} </Text>
            </View>
          )
        }}
        keyExtractor={(item, index) => item.id.toString()}
        ItemSeparatorComponent={<View style={ {height: 16} } />}
        // contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}
        ListEmptyComponent={<Text style={{ fontSize: 24 }}>No items found</Text>}
        ListHeaderComponent={<Text style={styles.headerStyle} >Pokemon List</Text>}
        ListFooterComponent={<Text style={styles.footerStyle}>End of List</Text>}
       /> */}

        <SectionList 
          sections={groupedPokemonList}
          renderItem={({item}) => {
            return(
              <View style={styles.card}>
                <Text style={styles.name}> {item} </Text>
              </View>
            )
          } }
          renderSectionHeader={({section}) => (
            <Text style={styles.headerStyle} > {section.type} </Text>
           )}
          
          ItemSeparatorComponent={() => <View style={{height: 16}} />}
          SectionSeparatorComponent={() => <View style={{height:16}} />}
        />


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollview: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    elevation: 5,
    // marginBottom: 16,
    padding: 16,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 18,
  },
  headerStyle: {
    fontSize: 24,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footerStyle: {
    fontSize: 24,
    marginTop: 12,
    textAlign: 'center',
  },
});
