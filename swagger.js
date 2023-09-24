const swaggerAutoGen = require('swagger-autogen')();

const doc = {
    info: {
        title: "CIT341 Project 1 API",
        description: "This is the API for my CIT341 Project",
    },
    host: "localhost:3000",
    schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//generate swagger.json
swaggerAutoGen(outputFile, endpointsFiles, doc);