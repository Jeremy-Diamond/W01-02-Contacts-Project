const swaggerAutoGen = require('swagger-autogen')();

const doc = {
    info: {
        title: "CIT341 Project 1 API",
        description: "This is the API for my CIT341 Project",
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Contacts",
            "description": "API for contacts in the system"
        }
    ],
    definitions: {
        Contact:   {
            "firstName": "FFEG",
            "lastName": "Diamond",
            "email": "jeffd@email.com",
            "birthday": "1984-01-23",
            "favoriteColor": "Blue"
          }
    }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//generate swagger.json
swaggerAutoGen(outputFile, endpointsFiles, doc);