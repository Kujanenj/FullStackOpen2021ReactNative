import React from "react";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import { useQuery } from "@apollo/client";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { AUTHORIZED_USER } from "../graphql/queries";
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
  const { data, loading } = useQuery(AUTHORIZED_USER);
  if (loading) {
    return <View></View>;
  }
  console.log("Auth user in component");
  console.log(data);
  console.log(data.authorizedUser)
  console.log("Is it null?");
  console.log(data.authorizedUser == null);
  console.log(!!data.authorizedUser)
  return (
    <View style={styles.flexContainer}>
      <Pressable onPress={() => console.log("ress")}>
        <ScrollView horizontal>
          <AppBarTab loggedIn={!!data.authorizedUser}></AppBarTab>
        </ScrollView>
      </Pressable>
    </View>
  );
};

export default AppBar;
