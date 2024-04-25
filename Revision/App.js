import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, Image, Button } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}

    if (!name) errors.name = "Enter your Username"
    if (!password) errors.password = "Enter you Password"

    setErrors(errors);

    return Object.keys(errors).length === 0
  }
   const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted ", name, password )
      setName("");
      setPassword("");
      setErrors({});
    }
   }

  return (
    <KeyboardAvoidingView  behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={styles.container}>
      <View style={styles.form}>
        <Image style={styles.image} source={require("./assets/adaptive-icon.png")} />
        <Text style={styles.label}> Username </Text>
        <TextInput style={styles.input} placeholder='Enter your Username' value={name} onChangeText={setName} />
        {
          errors.name ? <Text style={styles.errorText} > {errors.name} </Text> : null
        }
        <Text style={styles.label}> Password </Text>
        <TextInput style={styles.input} placeholder='Enter your Password' secureTextEntry value={password} onChangeText={setPassword} />
        {
          errors.password ? <Text style={styles.errorText} > {errors.password} </Text> : null
        }
        <Button title='Log In' onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginBottom: 50,
  },
  errorText: {
    color: 'red',
    marginBottom: 10
  }
});
