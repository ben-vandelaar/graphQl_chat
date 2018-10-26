import gql from 'apollo-server-express'

export default gql`
    extend type Query {
        __: Sring
    }

    extend type Mutation {
        __: Sring
    }

    type Subscription {
        __: Sring
    }
`