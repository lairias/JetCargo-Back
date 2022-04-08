const { gql } =require( "apollo-server-express")

const typeDefs = gql`
  type User {
    PROFILE_PHOTO_PATH: String
  }

  type Query {
    hello: String
    getAllUsers: [User]
  }
  type Mutation {
    createUser(PROFILE_PHOTO_PATH: String): User
  }
`;
module.exports = {
  typeDefs,
};
