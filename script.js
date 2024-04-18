const myLibrary = [];

const grid = document.getElementById("grid");
const dialog = document.querySelector("dialog");
const addButton = document.querySelector("button");
const closeButton = document.getElementById("close");
const container = document.getElementById("container");
const submitButton = document.querySelector("button[type=submit]");

function Book(title, author, pages, hasBeenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasBeenRead = hasBeenRead;
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let hasBeenRead = document.getElementById("read").checked;
    const newBook = new Book (title, author, pages, hasBeenRead);
    myLibrary.push(newBook);
}

function displayBook() {
    myLibrary.forEach(Book => {
        myLibrary.shift();
        const card = document.createElement("div");
        card.classList.add("card");
        grid.appendChild(card);

        const deleteBook = document.createElement("button");
        deleteBook.textContent = "X";
        deleteBook.classList.add("delete-button");
        card.appendChild(deleteBook);

        deleteBook.addEventListener("click", () => {
            card.remove();
        });
        
        const title = document.createElement("h3");
        title.textContent = Book.title;
        card.appendChild(title);
    
        const author = document.createElement("p");
        author.textContent = Book.author;
        card.appendChild(author);
    
        const pages = document.createElement("p");
        pages.textContent = Book.pages;
        card.appendChild(pages);

        const status = document.createElement("button");
        status.classList.add("status");
        if (Book.hasBeenRead === true) {
            status.textContent = "Read";
            card.appendChild(status);
            status.style.backgroundColor = "green";
        }else {
            status.textContent = "Not Read";
            status.style.backgroundColor = "red";
            card.appendChild(status);
        }

        status.addEventListener("click", () => {
            if (status.textContent === "Read") {
                status.textContent = "Not Read";
                Book.hasBeenRead = false;
                status.style.backgroundColor = "red";
            }else {
                status.textContent = "Read";
                Book.hasBeenRead = true;
                status.style.backgroundColor = "green";
            }
        })
    });
}

addButton.addEventListener("click", () => {
    dialog.classList.remove("hidden");
    dialog.showModal();
});


closeButton.addEventListener("click", () => {
    dialog.classList.add("hidden");
});

submitButton.addEventListener("click", function(e) {
    addBookToLibrary();
    displayBook();
    dialog.classList.add("hidden");
});