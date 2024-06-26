import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
    me {
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