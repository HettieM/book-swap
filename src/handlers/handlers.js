const templates = require("../templates/templates");
const model = require("../models/models");

function homeHandler(request, response) {
  const body = "";
  request.on("data", (chunk) => (body += chunk));
  request.on("end", () => {
    model.getAllBooks(body).then((books) => {
      response.writeHead(200, { "content-type": "text/html" });
      console.log(books);
      const homeHtml = templates.home(books);
      response.end(homeHtml);
    });
  });
}

function formHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  const formHtml = templates.form();
  response.end(formHtml);
}

function formPost(request, response) {
  let body = "";
  request.on("data", (chunk) => (body += chunk));
  request.on("end", () => {
    const searchParams = new URLSearchParams(body);
    const data = Object.fromEntries(searchParams);
    console.log(data);
    model
      .createBook(data)
      .then(() => {
        response.writeHead(302, { location: "/" });
        response.end();
      })
      .catch((error) => {
        response.writeHead(500, { "content-type": "text/html" });
        response.end("<h1> Something went wrong hunni</h1>");
      });
  });
}

module.exports = { homeHandler, formHandler, formPost };
