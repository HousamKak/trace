import * as React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";

const InputField = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.placeholder}</Text>
      <TextInput
        style={styles.field}
        placeholder={props.placeholder}
        mode="flat"
        placeholderTextColor="#818181"
        onChangeText={(e) => props.onChange(e)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  field: {
    height: 55,
    width: 331,
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
  },
  container: {
    flexDirection: "column",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "left",
    marginBottom: 6,
  },
});

export default InputField;
