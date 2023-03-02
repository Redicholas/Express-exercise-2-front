export default function fetchBooks() {
  const currentBooks = document.querySelector("#currentBooks");
  fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then((books) => {
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
    });
}

fetchBooks();
