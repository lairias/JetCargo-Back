const { USERS } =require( "../models/Users")
const resolvers = {
  Query: {
    hello: () => "Hola",
    getAllUsers: async () => {
      const users = await USERS.findAll();
      return users;
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      const { PROFILE_PHOTO_PATH } = args;
      const user = await USERS.create({
        PROFILE_PHOTO_PATH,
      });
      return user;
    },
  },
};

module.exports = { resolvers };
