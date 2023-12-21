const { 
    GraphQLSchema,
    GraphQLList,
    GraphQLObjectType, 
} = require('graphql')
const UserType = require('./types/UserType')

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: { 
        getUsers: { 
            type: new GraphQLList(UserType),
            resolve: () => [
                {id: 123, name: 'Artme'}
            ],
        }
    }
})

const schema = new GraphQLSchema({ 
    query: Query,
});

module.exports = schema;