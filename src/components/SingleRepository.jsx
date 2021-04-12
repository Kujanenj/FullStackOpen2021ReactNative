import React from "react";
import { View, Text } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";
import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
const SingleRepository = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { id: id },
  });
  if (!loading) {
    return <RepositoryItem item={data.repository} isSingle={true}></RepositoryItem>;
  }
  return null
};
export default SingleRepository;
