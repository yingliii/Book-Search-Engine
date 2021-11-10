const express = require('express');
const path = require('path');
// IMPORTING the ApolloServer class
const { ApolloServer } = require('apollo-server-express');

// IMPORTING the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');

const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
// CREATING a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// UPDATING Express.js to use Apollo server features
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  // log where we can go to test our GQL API
  consolde.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});
