const { 
    GraphQLString,
    GraphQLID,
    GraphQLObjectType
} = require('graphql')


const TopicType = new GraphQLObjectType({
    name: 'Topic',
    fields: () => ({ 
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        description: {type: GraphQLString}
    })
});

module.exports = TopicType;