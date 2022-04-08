const app =require( "./app")
const db =require( "./config/database")
require('dotenv').config()
// const { ApolloServer } =require( "apollo-server-express";
// const { typeDefs } =require( "../src/types/typeDefs/typeDefs";
// const { resolvers } =require( "../src/graphql/resolvers";
async function main() {
  // const apolloServer = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  // });
  // await apolloServer.start();
  // apolloServer.applyMiddleware({ app });
  await db
    .authenticate()
    .then(() => console.log("Conectado a la base de datos"))
    .catch((error) => console.log(error));
  await app.listen(process.env.PORT, () => {
    console.log("Server puesto 4000");
  });
}
main();
