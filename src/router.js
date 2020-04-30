const handlers = require("./handlers/handlers");

function router(request, response) {
  const { url, method } = request;

  if (url === "/" && method === "GET") {
    handlers.homeHandler(request, response);
  }
  if (url === "/add" && method === "GET") {
    handlers.formHandler(request, response);
  }
}

module.exports = router;
