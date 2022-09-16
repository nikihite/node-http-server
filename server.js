import http from "node:http";
import app from "./lib/app.js";

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

server.listen(PORT, HOST, () => {
    console.log(server.address());
});