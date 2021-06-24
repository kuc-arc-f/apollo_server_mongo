const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import LibTask from '../lib/LibTask'
import {typeDefs} from './scheme'

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    async tasks(){
      return await LibTask.get_items();
    },
    async task(parent, args, context, info){
      return await LibTask.get_item(args.id);
    },
  },
  Mutation: {
    addTask: async (parent, args, context) => {
      var ret = await LibTask.add_item(args)
      return ret
    },
    updateTask: async (parent, args, context) => {
      var ret = await LibTask.update_item(args)
      return ret
    },
    deleteTask: async (parent, args, context) => {
      var ret = await LibTask.delete_item(args)
      return ret
    },

  }
};

const server = new ApolloServer({ typeDefs, resolvers });
//await server.start();
const app = express();
server.applyMiddleware({ app });
// ENV
console.log(app.get('env'));
var config = require('../config.json')[app.get('env')];
// console.log(config.MYSQL_DBNAME);

app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
