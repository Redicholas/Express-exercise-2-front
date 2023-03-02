function init() {
  fetchBooks();
}

function fetchBooks() {
  const currentBooks = document.querySelector("#currentBooks");
  fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then((books) => {
      currentBooks.innerHTML = books
        .map((book) => {
          return `
          <div class="book">
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            </div>`;
        })
        .join("");
    });
}

init();
