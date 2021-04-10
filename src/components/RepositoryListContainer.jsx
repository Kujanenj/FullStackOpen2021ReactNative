import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import theme from "../theme";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.mainBackground,
  },
  container: {
    backgroundColor: "white",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;
const renderItem = ({ item }) => <RepositoryItem item={item}></RepositoryItem>;
const RepositoryListContainer = ({ repositories, loading }) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
      />
    </View>
  );
};
export default RepositoryListContainer
