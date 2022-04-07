import app from "./app";
import db from "./config/database";
import "dotenv/config";
// import { ApolloServer } from "apollo-server-express";
// import { typeDefs } from "../src/types/typeDefs/typeDefs";
// import { resolvers } from "../src/graphql/resolvers";
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
