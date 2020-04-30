const handlers = require("./handlers");

function router(request, response) {
  const { url, method } = request;

  if (url === "/" && method === "GET") {
    handlers.homeHandler(request, response);
  } else if (url.includes("public")) {
    handlers.publicHandler(request, response);
  } else if (url === "/add" && method === "GET") {
    handlers.formHandler(request, response);
  } else if (url === "/submit" && method === "POST") {
    handlers.formPost(request, response);
  } else if (url.includes("delete")) {
    handlers.deletePost(request, response, url);
  } else {
    handlers.missing(request, response);
  }
}

module.exports = router;
