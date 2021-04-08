import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
 query {
  repositories {
    totalCount
  	edges{
      node{
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
