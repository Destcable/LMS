const { 
    GraphQLString,
    GraphQLID,
    GraphQLObjectType
} = require('graphql')

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
    })
});

module.exports = UserType;