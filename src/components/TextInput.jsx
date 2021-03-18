import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    borderRadius: 5,
  },
  textinvalid: {
    borderColor: "red",
  },
  textvalid: {
    borderRadius:2
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return (
    <NativeTextInput
      style={[textInputStyle, error ? styles.textinvalid : styles.textvalid]}
      {...props}
    />
  );
};

export default TextInput;
