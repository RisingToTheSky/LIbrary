let myLibrary = [];

const grid = document.getElementById("grid");
const dialog = document.querySelector("dialog");
const addButton = document.querySelector("button");
const closeButton = document.getElementById("close");
const container = document.getElementById("container");
const submitButton = document.querySelector("button[type=submit]");
const form = document.querySelector("form");

class Book{
    constructor(title, author, pages, hasBeenRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasBeenRead = hasBeenRead;
        this.uniqueId = Date.now();
    }
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let hasBeenRead = document.getElementById("read").checked;
    const newBook = new Book (title, author, pages, hasBeenRead);
    myLibrary.push(newBook);
}

function removeBookFromLibrary(uniqueId) {
    myLibrary = myLibrary.filter(Book => Book.uniqueId !== uniqueId);
}

function displayBook() {
    const lastBook = myLibrary[myLibrary.length - 1];
    if (lastBook) {
        const card = document.createElement("div");
        card.classList.add("card");
        grid.appendChild(card);

        const deleteBook = document.createElement("button");
        deleteBook.textContent = "X";
        deleteBook.classList.add("delete-button");
        card.appendChild(deleteBook);

        deleteBook.addEventListener("click", () => {
            removeBookFromLibrary(lastBook.uniqueId);
            card.remove();
        });
        
        const title = document.createElement("h3");
        title.textContent = lastBook.title;
        card.appendChild(title);
    
        const author = document.createElement("p");
        author.textContent = lastBook.author;
        card.appendChild(author);
    
        const pages = document.createElement("p");
        pages.textContent = lastBook.pages;
        card.appendChild(pages);

        const status = document.createElement("button");
        status.classList.add("status");
        card.appendChild(status);

        lastBook.toggleReadStatus();
        status.textContent = lastBook.hasBeenRead ? "Unread" : "Read";
        if (status.textContent === "Read") {
            status.style.backgroundColor = "green";
        }else {
            status.style.backgroundColor = "red";
        }

        status.addEventListener("click", () => {
            lastBook.toggleReadStatus();
            status.textContent = lastBook.hasBeenRead ? "Unread" : "Read";
            if (status.textContent === "Read") {
                status.style.backgroundColor = "green";

            }else {
                status.style.backgroundColor = "red";
            }
        });
    }
}

Book.prototype.toggleReadStatus = function (){
    this.hasBeenRead = !this.hasBeenRead;
}

addButton.addEventListener("click", () => {
    dialog.classList.remove("hidden");
    dialog.showModal();
});


closeButton.addEventListener("click", () => {
    dialog.classList.add("hidden");
    form.reset();
});

submitButton.addEventListener("click", function(event) {
    addBookToLibrary();
    displayBook();
    dialog.classList.add("hidden");
    form.reset();
});