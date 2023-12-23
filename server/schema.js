const { 
    GraphQLSchema,
    GraphQLList,
    GraphQLObjectType, 
} = require('graphql')
const UserType = require('./types/UserType')
const TopicType = require('./types/TopicType')

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: { 
        getUsers: { 
            type: new GraphQLList(UserType),
            resolve: () => [
                {id: 123, name: 'Artme'}
            ],
        },
        getTopics: { 
            type: new GraphQLList(TopicType),
            resolve: () => [
                {id: 1, name: 'ЦОК 003'}
            ],
        }
    }
})

const schema = new GraphQLSchema({ 
    query: Query,
});

module.exports = schema;