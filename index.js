const currentBooks = document.querySelector("#currentBooks");

export default function fetchBooks() {
  fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then((books) => {
      renderBooks(books);
    })
    .catch((err) => {
      currentBooks.innerHTML = "<h1>Error loading books</h1>";
      console.log(err);
    });
}

function renderBooks(books) {
  currentBooks.innerHTML = books
    .map((book) => {
      const isAvailable = book.isAvailable ? "Available" : "Not Available";
      return `
            <div class="book">
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <strong>${isAvailable}</strong>
            </div>
            <hr>`;
    })
    .join("");
}

fetchBooks();
