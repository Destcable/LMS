const { 
    GraphQLString,
    GraphQLID,
    GraphQLObjectType
} = require('graphql')


const TopicType = new GraphQLObjectType({
    name: 'Topic',
    fields: () => ({ 
        id: {type: GraphQLID},
        name: {type: GraphQLString}
    })
});

module.exports = TopicType;