const AutoSwag = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Midterm Project',
        description: 'Midterm Project',
    },
    host: 'http://localhost:3000/',
    schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

AutoSwag(endpointFiles, outputFile, doc)
  .then(() => {
    console.log('Swagger file created');
  })
  .catch((err) => {
    console.error('Error creating Swagger file:', err);
    throw err; // re-throw the error to stop the script
  });
