const templates = require("../templates/templates");

function homeHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  const homeHtml = templates.home();
  response.end(homeHtml);
}

function formHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  const formHtml = templates.form();
  response.end(formHtml);
}

module.exports = { homeHandler, formHandler };
