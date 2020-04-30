function sharedLayout(bodyContent) {
  return `<!DOCTYPE html>
      <html lang="en">
        <head>
        <title>Recipes Project</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
        </head>
        <body>${bodyContent}</body>
      </html>
      `;
  //link to stylesheet somewhere?
}

function home() {
  return sharedLayout(`
    <section class="heading-wrapper">
        <h1 class="page-title">Gals' Books Available</h1>
        <a class="link link-add-book" href="/add">Add a book here</a>
    </section>
    <section class="books-wrapper"></section>
    `);
}

function form() {
  return sharedLayout(`
    <section>
        <form class="form" id="form" action="/submit" method="POST">
        <a class="link__home" href="/">Back to Home Page!</a>

        <label class="form__label" for="bookTitle">Book Title:</label>
        <input class="form__input" id="bookTitle" type="text" name="title" required> 
        
        <label class="form__label" for="bookAuthor">Book Author:</label>
        <input class="form__input" id="bookAuthor" type="text" name="author" required> 

        <label class="form__label" for="bookAbout">About:</label>
        <textarea class="form__textbox" id="bookAbout" name="about" placeholder="Not required"></textarea>

        <label class="form__label" for="addedBy">Added By:</label>
        <input class="form__input" id="addedBy" type="text" name="added_by" required> 

        <button class="form__button" aria-label="button to add recipe" type="submit">Add Book!</button>
        </form>
      </section>
    `);
}

module.exports = { home, form };
