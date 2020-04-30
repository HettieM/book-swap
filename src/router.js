const handlers = require("./handlers/handlers");

function router(request, response) {
  const { url, method } = request;

  if (url === "/" && method === "GET") {
    handlers.homeHandler(request, response);
  } else if (url === "/add" && method === "GET") {
    handlers.formHandler(request, response);
  } else if (url === "/submit" && method === "POST") {
    handlers.formPost(request, response);
  } else if (url.includes("delete")) {
    handlers.deletePost(request, response, url);
  }
}

module.exports = router;
