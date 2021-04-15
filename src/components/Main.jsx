import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";
import theme from "../theme";
import AppBar from "./AppBar/AppBar";
import ReviewForm from "./Repositories/Reviews/ReviewForm";
import RepositoryList from "./Repositories/RepositoryList";
import SignIn from "./User/SignIn";
import SingleRepository from "./Repositories/SingleRepository";
import CreateUserForm from "./User/CreateUserForm";
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <Switch>
        <Route path="/reviews/create">
          <ReviewForm></ReviewForm>
        </Route>
        <Route path="/repositories/:id">
          <SingleRepository></SingleRepository>
        </Route>
        <Route path="/repositories" exact>
          <RepositoryList></RepositoryList>
        </Route>
        <Route path="/user/create">
          <CreateUserForm></CreateUserForm>
        </Route>
        <Route path="/user/login" exact>
          <SignIn></SignIn>
        </Route>
        <Redirect to="/user/login"></Redirect>
      </Switch>
    </View>
  );
};

export default Main;
