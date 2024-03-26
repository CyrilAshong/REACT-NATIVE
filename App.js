import { View, Text, Image, ScrollView, Button, Pressable } from 'react-native';
const logoImg = require ('./assets/adaptive-icon.png')

export default function App(){
  return(
    <View style={{flex: 1, backgroundColor: 'green', padding: 60}}>
      <ScrollView>
      <Pressable onPress={() => {console.log("Image was pressed")}}>
        <Image source={logoImg} style={{width:300, height: 300}}></Image>
      </Pressable>
      <Pressable onPress={() => {console.log("Text was pressed")}}>
        <Text>Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. 
          Text messages may be sent over a cellular network or may also be sent via satellite or Internet connection.
          The term originally referred to messages sent using the Short Message Service (SMS).
          It has grown beyond alphanumeric text to include multimedia messages using the Multimedia Messaging Service (MMS) and Rich Communication Services (RCS), which can contain digital images, videos, and sound content, as well as ideograms known as emoji (happy faces, sad faces, and other icons), and instant messenger applications (usually the term is used when on mobile devices).
        </Text>
      </Pressable>  

        <Image source={logoImg} style={{width:300, height: 300}}></Image>
        <Button 
          title='Press'
          onPress={() => {console.log("Button was pressed")}}
          color= "red"
        />
        </ScrollView>
    </View>
  );
}