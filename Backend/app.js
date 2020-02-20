import InfermedicaApi from "./infermedica-api";
import settings from "./settings";
import Patient from "./patient";

var message = "Imma programming wizard";
console.log(message);

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(message);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// this.api = new InfermedicaApi(settings["appID"], settings["appKey"]);
// this.patient = new Patient();
// x;
