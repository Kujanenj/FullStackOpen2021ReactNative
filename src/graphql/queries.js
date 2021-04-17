import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      totalCount
      edges {
        node {
          id
          language
          description
          fullName
          ownerAvatarUrl
          stargazersCount
          reviewCount
          forksCount
          ratingAverage
        }
      }
    }
  }
`;
export const GET_REPOSITORY_BY_ID = gql`
  query repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      fullName
      url
      ownerName
      id
      language
      description
      ownerAvatarUrl
      stargazersCount
      reviewCount
      forksCount
      ratingAverage
      url
      reviews(first: $first, after: $after) {
        totalCount
           pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
     
      }
    }
  }
`;
export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
    }
  }
`;
