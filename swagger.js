const AutoSwagger = require('auto-swagger');

module.exports = AutoSwagger({
    api: app,
    file: 'swagger.json',
    host: 'localhost:3000',
    schemes: ['http'],
    basePath: '/',
    info: {
        title: 'CSE341 Midterm Project',
        description: 'API endpoints for the CSE341 Midterm Project',
        version: '1.0.0'
    }
});


const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

AutoSwag(endpointFiles, outputFile, doc).then(() => {
    console.log('Swagger file created');
}).catch((err) => {
    console.log('Error creating swagger file');
    console.log(err);
});