import React from "react";
import { View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding:10
  },
  flexItem: {
    flexGrow: 1,
    padding:10
  },
});

const AppBarTab = () => {
  return (
    <View style={styles.flexContainer} >
      <View style={styles.flexItem}>
        <Link to="/repositories">
          <Text fontWeight="bold" color="textSecondary">
            Repositories
          </Text>
        </Link>
      </View>
      <View style={styles.flexItem}>
        <Link to="/login">
          <Text fontWeight="bold" color="textSecondary">
            Login
          </Text>
        </Link>
      </View>
    </View>
  );
};
export default AppBarTab;
