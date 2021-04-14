import React from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useHistory } from "react-router";
import theme from "../../theme";
import RepositoryItem from "./RepositoryItem";
import Text from "../Texts/Text";
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

const RepositoryListContainer = ({ repositories, loading }) => {
  let history = useHistory();
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
        renderItem={({ item }) => (
          <Pressable onPress={() =>history.push(`repositories/${item.id}`) }>
            <RepositoryItem item={item}></RepositoryItem>
          </Pressable>
        )}
      />
    </View>
  );
};
export default RepositoryListContainer;
