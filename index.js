const lambdaExpress = require('aws-serverless-express');
const app = require('./src/server');
const dotenv = require('dotenv');

dotenv.config({ path: __dirname + "/.env" });

if(process.env.NODE_ENV === 'development'){
  app.listen(3000, () => console.log("Server started on port 3000"));
}

const lambdaServer = lambdaExpress.createServer(app);

exports.handler = (event, context) => lambdaExpress.proxy(lambdaServer, event, context);