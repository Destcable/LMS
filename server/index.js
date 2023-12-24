const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const pgClient = require('./pgClient')

// pgClient.query(
//     'INSERT INTO topics (title, description) VALUES ($1, $2) RETURNING *',
//     ['13.01.10 Классификация электроизмерительных приборов', 'desc'], (err, result) => {
//         if (err) { 
//             console.log('error')
//         } else { 
//             console.log('insert data: ' + result.rows)
//         }
//     }
// )

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
}));

app.listen(5000, () => console.log('server start port: 5000'));