const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const path = require('path');
const Query = require('./src/resolvers/Query');
const Mutation = require('./src/resolvers/Mutation');
const { readAndConcatenateSchemas } = require('./src/utils/readAndConcatenateSchemas');

const resolvers = { 
    Query,
    Mutation
};

const schemaFilePaths = [
    path.join(__dirname, 'customTypes.graphql'),
    path.join(__dirname, 'src/models/Topic/schema.graphql'),
    path.join(__dirname, 'src/models/TopicHeader/schema.graphql'),
    path.join(__dirname, 'src/models/TopicTheme/schema.graphql'),
    path.join(__dirname, 'src/models/ThemeTask/schema.graphql'),
];
const prisma = new PrismaClient();

const server = new ApolloServer({
    typeDefs: readAndConcatenateSchemas(schemaFilePaths),
    resolvers,
    context: { 
        prisma,
    }
})

server
    .listen()
    .then(({ url }) => console.log(`❄️  Server ready at: ${url}`))