const borrowedBooksContainer = document.querySelector("#borrowedBooks");

function fetchBorrowedBooks() {
  fetch("http://localhost:3000/books/borrowedbooks")
    .then((resp) => resp.json())
    .then((books) => {
      renderBorrowedBooks(books);
    });
}

function renderBorrowedBooks(books) {
  borrowedBooksContainer.innerHTML = "";
  books.map((book) => {
    borrowedBooksContainer.innerHTML += `
            <div class="book">
                <h2>${book.title}</h2>
                <p>${book.author}</p>
                <button class="returnBookBtn" id="${book.id}">Return Book</button>
            </div>
            <hr>`;
  });
  addReturnBtn();
}

function addReturnBtn() {
  const returnBookBtn = document.querySelectorAll(".returnBookBtn");
  returnBookBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      findBookById(e.target.id);
    });
  });
}

function findBookById(id) {
  fetch(`http://localhost:3000/books/bookid/${id}`)
    .then((resp) => resp.json())
    .then((book) => {
      returnBook(book.id, book);
    });
}

function returnBook(id, book) {
  const returnedBook = {
    title: book.title,
    author: book.author,
  };
  fetch(`http://localhost:3000/books/returnbook/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(returnedBook),
  });
  window.location.reload();
}

fetchBorrowedBooks();
