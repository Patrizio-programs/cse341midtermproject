const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Midterm API',
    description: 'Midterm API'
  },
  host: 'cse341midtermproject.onrender.com',
  schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js', './routes/data.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);