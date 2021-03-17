import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";
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
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  button: {
    paddingLeft: 50,
  },
});
const LineItem = ({ text, value }) => {
  let copyValue = value;
  if (!isNaN(copyValue)) {
    if (copyValue > 1000) {
      copyValue = `${Math.round(value / 100) / 10}k`;
    }
  }

  return (
    <View style={styles.flexItem}>
      <Text fontWeight="bold">{copyValue}</Text>
      <Text>{text}</Text>
    </View>
  );
};
const RepositoryItem = ({ item }) => (
  <View>
    <View style={styles.flexContainer}>
      <Image
        style={[styles.tinyLogo]}
        source={{
          uri: item.ownerAvatarUrl,
        }}
      ></Image>
      <LineItem text={item.description} value={item.fullName}></LineItem>
    </View>
    <View style={styles.flexContainer}>
    <View style={[styles.button]}>
      <Button title={item.language}></Button>
    </View>
    </View>
    <View style={styles.flexContainer}>
      <LineItem text={"Stars"} value={item.stargazersCount}></LineItem>
      <LineItem text={"Reviews"} value={item.reviewCount}></LineItem>
      <LineItem text={"Forks"} value={item.forksCount}></LineItem>
      <LineItem text={"Rating"} value={item.ratingAverage}></LineItem>
    </View>
  </View>
);
export default RepositoryItem;
