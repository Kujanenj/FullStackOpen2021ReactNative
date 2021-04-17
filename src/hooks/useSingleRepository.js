import { useQuery } from "@apollo/client";

import { GET_REPOSITORY_BY_ID } from "../graphql/queries";

const useSingleRepository = (variables) => {
  const { data, loading, fetchMore,...result } = useQuery(GET_REPOSITORY_BY_ID, {
    variables,
  });
  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };
  return {
    repository: data ? data.repository : undefined,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};
export default useSingleRepository;
