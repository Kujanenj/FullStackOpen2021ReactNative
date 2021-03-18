import React from "react";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.testColor,
  },
  flexItem: {
    flexGrow: 1,
  },
});

const AppBar = () => {
  return (
    <View style={styles.flexContainer}>
      <Pressable onPress={() => console.log("ress")}>
        <ScrollView horizontal>
          <AppBarTab></AppBarTab>
        </ScrollView>
      </Pressable>
    </View>
  );
};

export default AppBar;
