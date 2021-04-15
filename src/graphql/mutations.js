import { gql } from "@apollo/client";
export const SIGN_IN = gql`
  mutation authorize($credentials: AuthorizeInput) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;
export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repository {
        id
      }
    }
  }
`;
export const CREATE_USER = gql`
  mutation createUser($credentials: CreateUserInput) {
    createUser(user: $credentials) {
      id
      username
    }
  }
`;
