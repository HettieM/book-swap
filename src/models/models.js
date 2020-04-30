const db = require("../database/connection");

function createBook(bookObj) {
  const values = [
    bookObj.title,
    bookObj.author,
    bookObj.about,
    bookObj.added_by,
  ];
  return db.query(
    "INSERT INTO books(title, author, about, added_by) VALUES($1, $2, $3, $4)",
    values
  );
}

module.exports = { createBook };
