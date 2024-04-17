const myLibrary = [];
const main = document.getElementsByClassName("main");
const grid = document.getElementById("grid");
const dialog = document.querySelector("dialog");
const addButton = document.querySelector("button");
const closeButton = document.getElementById("close");
const container = document.getElementById("container");
const form = document.querySelector("form");

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');
const theHobbit2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', '295 pages', 'not read yet');
const theHobbit3 = new Book('The Silmarillion', 'J.R.R. Tolkien', '295 pages', 'not read yet');

function Book(title, author, pages, hasBeenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasBeenRead = hasBeenRead;
}

function addBookToLibrary() {
    myLibrary.push(theHobbit);
    myLibrary.push(theHobbit2);
    myLibrary.push(theHobbit3);
}

function displayLibrary() {
    myLibrary.forEach(Book => {
        const card = document.createElement("div");
        card.classList.add("card");
        grid.appendChild(card);

        const title = document.createElement("h3");
        title.textContent = Book.title;
        card.appendChild(title);

        const author = document.createElement("p");
        author.textContent = Book.author;
        card.appendChild(author);

        const pages = document.createElement("p");
        pages.textContent = Book.pages;
        card.appendChild(pages);
        
        const hasBeenRead = document.createElement("p");
        hasBeenRead.textContent = Book.hasBeenRead;
        card.appendChild(hasBeenRead);
    });
}

addButton.addEventListener("click", () => {
    dialog.classList.remove("hidden");
    dialog.showModal();
});


closeButton.addEventListener("click", () => {
    dialog.classList.add("hidden");
});

addBookToLibrary();
displayLibrary();

console.log(myLibrary);
