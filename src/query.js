//const {  gql } = require('apollo-server-express');

export const GQL_QUERY = `
  type Query {
    hello: String
    tasks: [Task]
    task(id: String): Task
  }
`;
