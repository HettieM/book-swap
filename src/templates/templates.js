function sharedLayout(bodyContent) {
  return `<!DOCTYPE html>
      <html lang="en">
        <head>
        <title>Recipes Project</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel='stylesheet' href="public/style.css"
          
        </head>
        <body>${bodyContent}</body>
      </html>
      `;
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
        <input class="form__input" id="bookTitle" type="text" name="bookTitle" required> 
        
        <label class="form__label" for="bookAuthor">Book Author:</label>
        <input class="form__input" id="bookAuthor" type="text" name="bookAuthor" required> 

        <label class="form__label" for="bookAbout">About:</label>
        <textarea class="form__textbox" id="bookAbout" name="bookAbout" placeholder="Not required"></textarea>

        <button class="form__button" aria-label="button to add recipe" type="submit">Add Recipe!</button>
        </form>
      </section>
    `);
}

module.exports = { home, form };
