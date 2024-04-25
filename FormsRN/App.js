import { Text, View, TextInput, Button, KeyboardAvoidingView, StyleSheet, Image,Platform } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [Username, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!Username) errors.Username = "Username is required"
    if (!Password) errors.Password = " Password us required"

    setErrors(errors);

    return Object.keys(errors).length === 0

  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", Username, Password);
      setUserName("");
      setPassword("");
      setErrors({});
    }
  }

  return(
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={styles.container}>
      <View style={styles.form}>
        <Image style={styles.image} source={require("./assets/adaptive-icon.png")} />
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder='Enter your Username' value={Username} onChangeText={setUserName} />
        {
          errors.Username ? <Text style={styles.errorText}>{errors.Username}</Text> : null
        }
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder='Enter your Password' secureTextEntry value={Password} onChangeText={setPassword} />
        {
          errors.Password ? <Text style={styles.errorText}> {errors.Password} </Text> : null
        }
        <Button title='Log In' onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 50,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  }
});











// // import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native';
// // import { useState } from 'react';

// // export default function App() {
// //   const [name, setName] = useState("");
// //   const [isDarkMode, setIsDarkMode] = useState("false");
// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <TextInput 
// //       style={ styles.input } 
// //       value= {name} 
// //       onChangeText={setName} 
// //       // keyboardType='' to change the keyboard type.
// //       // secureTextEntry  used to hide input. Purposely for Passwords.
// //       autoCorrect={false}
// //       autoCapitalize= 'none'      
// //       placeholder='Name'
// //       />
// //       <TextInput
// //       style={ [styles.input, styles.multiText] }
// //       placeholder='Message'
// //       multiline
// //       />
// //       <Text style={ styles.text }> My Name is {name} </Text>

// //       <View style={styles.switchContainer}>
// //         <Text style={styles.text}> Dark Mode </Text>
// //         <Switch value = {isDarkMode} onValueChange={() => setIsDarkMode((previousState) => !previousState)} 
// //           trackColor={{false: "orange", true: "pink"}}
// //           thumbColor="yellow"
// //         />
// //       </View>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     paddingTop: StatusBar.currentHeight,
// //   },
// //   input: {
// //     height: 40,
// //     margin: 12,
// //     padding: 10,
// //     borderWidth: 1,
// //   },
// //   text: {
// //     fontSize: 24,
// //   },
// //   multiText: {
// //     minHeight: 100,
// //     textAlignVertical: 'top',
// //   },
// //   switchContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingHorizontal: 10,
// //   },
// // });
