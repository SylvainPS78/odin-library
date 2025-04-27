// const creation

const myLibrary = [];
const addBookButton = document.querySelector(".add-button");
const dialog = document.querySelector(".new-book__dialog");
const closeButton = document.querySelector(".close-button");
const submitButton = document.querySelector(".submit-button");

// Functions creation

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

    const isReadContainer = document.createElement("p");
    isReadContainer.textContent = "Read: ";

    const isReadSpan = document.createElement("span");
    isReadSpan.classList.add("read-status");
    isReadSpan.textContent = book.isRead ? "Yes" : "No";
    isReadSpan.classList.add(book.isRead ? "read-yes" : "read-no");
    isReadSpan.style.cursor = "pointer";

    isReadSpan.addEventListener("click", () => {
      book.isRead = !book.isRead; // Inverser la valeur de isRead
      isReadSpan.textContent = book.isRead ? "Yes" : "No"; // Mettre à jour le texte
      isReadSpan.classList.toggle("read-yes"); // Basculer les classes
      isReadSpan.classList.toggle("read-no");
    });

    isReadContainer.appendChild(isReadSpan);
    bookContainer.appendChild(isReadContainer);

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

function createNewBook() {
  dialog.showModal();
}

// Event listeners creation

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const isReadInput = document.getElementById("is-read");
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = parseInt(pagesInput.value);
  const isRead = isReadInput.checked;

  if (title && author && !isNaN(pages)) {
    addBookToLibrary(title, author, pages, isRead);
    displayBooks();
    dialog.close();
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    isReadInput.checked = false;
  } else {
    alert("Please fill in all fields.");
  }
});

addBookButton.addEventListener("click", () => {
  createNewBook();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

// Example books creation

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

// Display books on page load
displayBooks();
