const {  gql } = require('apollo-server-express');
import {GQL_QUERY} from './query'
import {GQL_MUTATION} from './mutation'

export const typeDefs = gql`
  type Todo {
    id: Int!
    title: String
  }
  type Task {
    id: String
    title: String
  }  
  ${GQL_QUERY}
  ${GQL_MUTATION}
`;
