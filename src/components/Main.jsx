import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";
import theme from "../theme";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import SingleRepository from "./SingleRepository";
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <Switch>
        <Route path="/repositories/:id">
          <SingleRepository></SingleRepository>
        </Route>
        <Route path="/repositories" exact>
          <RepositoryList></RepositoryList>
        </Route>
        <Route path="/login" exact>
          <SignIn></SignIn>
        </Route>
        <Redirect to="/login"></Redirect>
      </Switch>
    </View>
  );
};

export default Main;
