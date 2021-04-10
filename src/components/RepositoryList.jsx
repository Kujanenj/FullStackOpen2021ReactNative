import React from "react";
import RepositoryListContainer from "./RepositoryListContainer";
import useRepositories from "../hooks/useRepositories";
const RepositoryList = () => {
  const { repositories, loading } = useRepositories();
  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
    ></RepositoryListContainer>
  );
};

export default RepositoryList;
