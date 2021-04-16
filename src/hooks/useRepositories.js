import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({orderBy,orderDirection},filter) => {
  const { data, loading, ...result } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy,orderDirection,searchKeyword:filter},
  });

  
  return {
    repositories: data ? data.repositories : undefined,
    // fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};
export default useRepositories;
