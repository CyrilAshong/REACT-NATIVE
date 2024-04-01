import { StyleSheet, Text, View } from 'react-native';
import Box from './Components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style= {{ backgroundColor: 'red', }}>Box 1</Box>
      <Box style= {{ backgroundColor: 'orange' }}>Box 2</Box>
      <Box style= {{ backgroundColor: 'yellow' }}>Box 3</Box>
      <Box style= {{ backgroundColor: 'green' }}>Box 4</Box>
      <Box style= {{ backgroundColor: 'blue' }}>Box 5</Box>
      <Box style= {{ backgroundColor: 'indigo' }}>Box 6</Box>
      <Box style= {{ backgroundColor: 'violet' }}>Box 7</Box>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
});
