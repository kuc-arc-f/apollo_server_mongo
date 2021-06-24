
export const GQL_MUTATION = `
  type Mutation {
    addTask(title: String!): Task
    updateTask(id: String!, title: String!): Task
    deleteTask(id: String!): Task
  }
`;
