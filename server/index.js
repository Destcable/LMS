const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const { Client } = require('pg');




// client.query(
//     'INSERT INTO topics (title, description) VALUES ($1, $2) RETURNING *',
//     ['Test 1223', 'desc'], (err, result) => {
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