const { 
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType, 
    graphql 
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