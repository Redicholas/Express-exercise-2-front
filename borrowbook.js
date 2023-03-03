const availableBooks = document.querySelector("#availableBooks");

function addBorrowBtn() {
  const borrowBookBtn = document.querySelectorAll(".borrowBookBtn");
  borrowBookBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      findBookById(e.target.id);
    });
  });
}

function findBookById(id) {
  fetch(`http://localhost:3000/books/bookid/${id}`)
    .then((resp) => resp.json())
    .then((book) => {
      borrowBook(book.id, book);
    });
}

function borrowBook(id, book) {
  const borrowedBook = {
    title: book.title,
    author: book.author,
  };
  fetch(`http://localhost:3000/books/borrowbook/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(borrowedBook),
  });
  window.location.reload();
}

function fetchBooks() {
  fetch("http://localhost:3000/books")
    .then((resp) => resp.json())
    .then((books) => {
      renderAvailableBooks(books);
    });
}

function renderAvailableBooks(books) {
  availableBooks.innerHTML = "";
  books.map((book) => {
    if (book.isAvailable) {
      availableBooks.innerHTML += `
        <div class="book">
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <button class="borrowBookBtn" id="${book.id}">Borrow Book</button>
        </div>
        <hr>`;
    }
  });
  addBorrowBtn();
}

fetchBooks();
