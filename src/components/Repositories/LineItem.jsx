import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../Texts/Text";
const styles = StyleSheet.create({
  flexItem: {
    flexGrow: 1,
  },
});
const LineItem = ({ text, value, testID }) => {
  let copyValue = value;
  if (!isNaN(copyValue)) {
    if (copyValue > 1000) {
      copyValue = `${Math.round(value / 100) / 10}k`;
    }
  }

  return (
    <View style={styles.flexItem}>
      <Text fontWeight="bold" testID={testID}>
        {copyValue}
      </Text>
      <Text>{text}</Text>
    </View>
  );
};
export default LineItem;
