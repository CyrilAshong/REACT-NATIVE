import { Text, View, Image } from "react-native";


const addDetails = (type) => {
    switch (type.toLowecase()) {
        case "electric":
            return { borderColor: "yellow", emoji: "⚡" };
        case "water":    
            return { borderColor: "blue", emoji: "💧" };
        case "fire":    
            return { borderColor: "red", emoji: "🔥" };
        case "grass":    
            return { borderColor: "green", emoji: "🍃" }
        default:
            return { borderColor: "plum", emoji: "❓" }
    }
}

export default function PractCards({
    name,
    hp,
    image,
    type,
    moves,
    weakness,
}) {

    const { borderColor, emoji } = addDetails(type);

    <View>
        <View>
            <Text> {name} </Text>
            <Text> {hp} </Text>
        </View>

        <Image source={image} resizeMode="contain" accessibilityLabel={ `${name} pokemon` } />

        <View>
            <View>
                <Text> {emoji} </Text>
                <Text> {type} </Text>
            </View>
        </View>

        <View>
            <Text> {moves} </Text>
        </View>

        <View>
            <Text> {weakness} </Text>
        </View>
    </View>
}