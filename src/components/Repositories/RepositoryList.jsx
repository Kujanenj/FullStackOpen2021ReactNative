import React, { useState } from "react";
import RepositoryListContainer from "./RepositoryListContainer";
import useRepositories from "../../hooks/useRepositories";
import parseOrderBy from "../../utils/parseOrder";
const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED");
  const { repositories, loading } = useRepositories(parseOrderBy(orderBy));
  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    ></RepositoryListContainer>
  );
};

export default RepositoryList;
