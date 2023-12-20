const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const configHeader = [
    { title: 'test', topLineColor: '#1231323', bottomLineColor: '#1213123', isButton_InfoContent: true, isButton_KeyWords: true}
];

const app = express();

const root = { 
    getConfigHeader: () => configHeader
}

app.use(cors());
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root
}));

app.listen(5000, () => console.log('server start port: 5000'));