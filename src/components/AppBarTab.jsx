import React from 'react'
import { View,StyleSheet} from "react-native";
import theme from '../theme';
import Text from "./Text";
const styles = StyleSheet.create({
  flexItem: {
    flexGrow: 1,
  },
});

const AppBarTab = () => {
    console.log("Render")
  return (
    <View style={styles.flexItem}>
      <Text fontWeight="bold" color="textSecondary">Repositories</Text>
    </View>
  );
};
export default AppBarTab;
