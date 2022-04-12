const app =require( "./app")
const db =require( "./config/database")
const {PORT} = require( "./config")
require('dotenv').config()
// const { ApolloServer } =require( "apollo-server-express";
// const { typeDefs } =require( "../src/types/typeDefs/typeDefs";
// const { resolvers } =require( "../src/graphql/resolvers";
  // const apolloServer = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  // });
  // await apolloServer.start();
  // apolloServer.applyMiddleware({ app });
  
   app.listen(PORT, () => {
    console.log(`Server puesto ${PORT}`);	
  });
