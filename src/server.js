const http = require("http");
const router = require("./router");

const PORT = process.env.PORT || 2000; // For heroku this needs to be 0.0.0.0 ?
const server = http.createServer(router);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
