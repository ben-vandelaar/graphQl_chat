import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {

    }

    extend type Mutation {

    }
    
    type User {
        id: ID!
        email: Srting!
        username: Srting!
        name: Srting!
        createdAt: Srting!
    }
`