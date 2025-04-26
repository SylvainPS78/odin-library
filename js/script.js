const myLibrary = [];

function Book(title, author, pages, isRead, iD) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.iD = iD;
}

function addBookToLibrary(title, author, pages, isRead) {
  const newID = crypto.randomUUID();
  const book = new Book(title, author, pages, isRead, newID);
  myLibrary.push(book);
}

function displayBooks() {
  const libraryContainer = document.querySelector(".library");
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");
    bookContainer.setAttribute("data-id", book.iD);

    const title = document.createElement("h2");
    title.textContent = book.title;
    bookContainer.appendChild(title);

    const author = document.createElement("h3");
    author.textContent = `Author: ${book.author}`;
    bookContainer.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    bookContainer.appendChild(pages);

    const isRead = document.createElement("p");
    isRead.textContent = `Read: ${book.isRead ? "Yes" : "No"}`;
    bookContainer.appendChild(isRead);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", () => {
      removeBook(book.iD);
      displayBooks();
    });

    bookContainer.appendChild(removeButton);

    document.querySelector(".library").appendChild(bookContainer);
  });
}

function removeBook(bookId) {
  const index = myLibrary.findIndex((book) => book.iD === bookId);
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, false);
addBookToLibrary(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  223,
  true
);
addBookToLibrary(
  "Harry Potter and the Chamber of Secrets",
  "J.K. Rowling",
  251,
  false
);
addBookToLibrary(
  "Harry Potter and the Prisoner of Azkaban",
  "J.K. Rowling",
  317,
  true
);
addBookToLibrary(
  "Harry Potter and the Goblet of Fire",
  "J.K. Rowling",
  636,
  false
);
addBookToLibrary(
  "Harry Potter and the Order of the Phoenix",
  "J.K. Rowling",
  766,
  true
);
addBookToLibrary(
  "Harry Potter and the Half-Blood Prince",
  "J.K. Rowling",
  607,
  false
);
addBookToLibrary(
  "Harry Potter and the Deathly Hallows",
  "J.K. Rowling",
  607,
  true
);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);

displayBooks();
