const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type ConfigHeader { 
        title: String
        topLineColor: String
        bottomLineColor: String
        isButton_InfoContent: Boolean
        isButton_KeyWords: Boolean
    }

    input ConfigHeaderInput { 
        title: String!
        topLineColor: String!
        bottomLineColor: String!
        isButton_InfoContent: Boolean!
        isButton_KeyWords: Boolean!
    }

    type Query { 
        getConfigHeader: [ConfigHeader]
    }

`);

// type Query { 
//     getAllEmployees: [Employee]
//     getEmployee(id: ID): Employee
// }
module.exports = schema;