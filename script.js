const myLibrary = [];
const main = document.getElementsByClassName("main");
const grid = document.getElementById("grid");

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
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        grid.appendChild(card);
    }
}

addBookToLibrary();
displayLibrary();

console.log(myLibrary);
