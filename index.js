export default function fetchBooks() {
  fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then((books) => {
      renderBooks(books);
    });
}

function renderBooks(books) {
  const currentBooks = document.querySelector("#currentBooks");
  currentBooks.innerHTML = books
    .map((book) => {
      const isAvailable = book.isAvailable ? "Available" : "Not Available";
      return `
            <div class="book">
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${isAvailable}</p>
            </div>`;
    })
    .join("");
}

fetchBooks();
