import React, { useState } from "react";
import RepositoryListContainer from "./RepositoryListContainer";
import useRepositories from "../../hooks/useRepositories";
import parseOrderBy from "../../utils/parseOrder";
import { useHistory } from "react-router";
import { useDebounce } from 'use-debounce';
const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED");
  const [filter,setFilter] = useState("");
  const [debouncedFilter] = useDebounce(filter,1000)

  const { repositories, loading } = useRepositories(parseOrderBy(orderBy),debouncedFilter);
    let history = useHistory();
  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      filter={filter}
      setFilter={setFilter}
      history={history}
      onEndReach={onEndReach}
    ></RepositoryListContainer>
  );
};

export default RepositoryList;
