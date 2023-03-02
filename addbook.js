import fetchBooks from "./index.js";

const addBookBtn = document.querySelector("#addBookBtn");

function addBook() {
  const bookTitleInput = document.querySelector("#bookTitleInput");
  const bookAuthorInput = document.querySelector("#bookAuthorInput");

  const newBook = {
    title: bookTitleInput.value,
    author: bookAuthorInput.value,
  };

  postNewBook(newBook);
}

function postNewBook(book) {
  fetch("http://localhost:3000/books/addbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  })
    .then((resp) => resp.json())
    .then((book) => {
      fetchBooks();
    });
}

addBookBtn.addEventListener("click", addBook);
