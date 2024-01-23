import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [result, setResult] = useState("");
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");

  const showPlus = () => {
    setResult(String(Number(numberOne) + Number(numberTwo)));
  };

  const showMinus = () => {
    setResult(String(Number(numberOne) - Number(numberTwo)));
  };

  return (
    <View style={styles.container}>
      <Text>
        Result: <Text>{result}</Text>
      </Text>
      <TextInput
        style={{ width: 200, borderColor: "grey", borderWidth: 1 }}
        onChangeText={(text) => setNumberOne(text)}
      />
      <TextInput
        style={{ width: 200, borderColor: "grey", borderWidth: 1 }}
        onChangeText={(text) => setNumberTwo(text)}
      />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.button} onPress={showPlus}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showMinus}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    marginHorizontal: 5,
    marginTop: 10,
  },
});
