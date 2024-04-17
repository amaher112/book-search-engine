const typeDefs = `
type Book {
    bookId: String!
    image: String
    link: String
    title: String!
    description: String!
    // authors: [ ]
}

type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

type Query {
    me: [User]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    // saveBook(): User
    removeBook(bookId: String!): User
}
`;
