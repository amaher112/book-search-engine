import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation saveBook($description: String!, $title: String!, $bookId: String!, $authors: [String], $image: String, $link: String) {
    saveBook(description: $description, title: $title, bookId: $bookId, authors: $authors, image: $image, link: $link) {
      _id
      email
      username
      bookCount
      savedBooks {
        bookId
        image
        link
        title
        description
        authors
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      email
      username
      bookCount
      savedBooks {
        bookId
        image
        link
        title
        description
        authors
      }
    }
  }
`;
