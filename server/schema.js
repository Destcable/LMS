const {
    GraphQLSchema,
    GraphQLList,
    GraphQLObjectType,
} = require('graphql')
const UserType = require('./types/UserType')
const TopicType = require('./types/TopicType')
const pgClient = require('./pgClient')

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getUsers: {
            type: new GraphQLList(UserType),
            resolve: () => [
                { id: 123, name: 'Artme' }
            ],
        },
        getTopics: {
            type: new GraphQLList(TopicType),
            resolve: async () => (await pgClient.query('SELECT * FROM topics')).rows
        }
    }
})

const schema = new GraphQLSchema({
    query: Query,
});

module.exports = schema;