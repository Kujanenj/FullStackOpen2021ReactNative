import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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
  query repository($id: ID!) {
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
