import React, { useState } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import TextInput from "../Texts/TextInput";
import theme from "../../theme";
import RepositoryItem from "./RepositoryItem";
import Text from "../Texts/Text";
import { Picker } from "@react-native-picker/picker";
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

export class RepositoryListContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  renderHeader = () => {
    return (
      <View>
        <TextInput
          placeholder="Filter.."
          value={this.props.filter}
          onChangeText={this.props.setFilter}
        ></TextInput>
        <Picker
          selectedValue={this.props.orderBy}
          onValueChange={(itemValue, itemIndex) => {
            this.props.setOrderBy(itemValue);
          }}
        >
          <Picker.Item label="Date" value="CREATED" />
          <Picker.Item label="Rating_higest" value="RATING_D" />
          <Picker.Item label="Rating lowest" value="RATING_A"></Picker.Item>
        </Picker>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={
            this.props.repositories
              ? this.props.repositories.edges.map((edge) => edge.node)
              : []
          }
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => this.props.history.push(`repositories/${item.id}`)}
            >
              <RepositoryItem item={item}></RepositoryItem>
            </Pressable>
          )}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}


export default RepositoryListContainer;
