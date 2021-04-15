import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";
import useLogOut from "../../hooks/useLogOut";
import Text from "../Texts/Text";
const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  flexItem: {
    flexGrow: 1,
    padding: 10,
  },
});

const AppBarTab = ({ loggedIn }) => {
  const logOut = useLogOut();
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItem}>
        <Link to="/repositories">
          <Text fontWeight="bold" color="textSecondary">
            Repositories
          </Text>
        </Link>
      </View>
      <View style={styles.flexItem}>
        <Link to="/reviews/create">
          <Text fontWeight="bold" color="textSecondary">
            Create a fooking review
          </Text>
        </Link>
      </View>
      <View style={styles.flexItem}>
        {!!loggedIn ? (
          <Pressable onPress={() => logOut()}>
            <Text fontWeight="bold" color="textSecondary">
              LogOut
            </Text>
          </Pressable>
        ) : (
          <View>
            <Link to="/user/login">
              <Text fontWeight="bold" color="textSecondary">
                Login
              </Text>
            </Link>
            <Link to="/user/create">
              <Text fontWeight="bold" color="textSecondary">
                Create User
              </Text>
            </Link>
          </View>
        )}
      </View>
    </View>
  );
};
export default AppBarTab;
