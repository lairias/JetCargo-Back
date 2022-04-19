const app =require( "./app")
const db =require( "./config/database")
// const { ApolloServer } =require( "apollo-server-express";
// const { typeDefs } =require( "../src/types/typeDefs/typeDefs";
// const { resolvers } =require( "../src/graphql/resolvers";
  // const apolloServer = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  // });
  // await apolloServer.start();
  // apolloServer.applyMiddleware({ app });
  
  const portApit = process.env.PORT || 4000
   app.listen(portApit, () => {
    console.log(`Server puesto ${portApit}`);	
  });
