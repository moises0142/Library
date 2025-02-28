const myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info =function(){
        return "The "+this.title+" by "+this.author+", "+this.pages+", "+this.read;
    }
}
let book20 = new Book("ti", "au", "100", "read");
let book30 = new Book("ble", "blo", "29", "ye");

addBookToLibrary();

function addBookToLibrary(){
  myLibrary.push(book20,book30);

}

let displayContainer = document.querySelector(".booksContainer");
displayBooks();

function displayBooks(){
    
    myLibrary.forEach((el) =>{
        let displayBox = document.createElement("div");
        displayBox.className = "displayBox"

        let displayTitle = document.createElement("div");
        displayTitle.textContent=(el.title);
        displayTitle.className = "title"
        displayBox.appendChild(displayTitle);

        let displayAuthor = document.createElement("div");
        displayAuthor.textContent=(el.author);
        displayAuthor.className = "author"
        displayBox.appendChild(displayAuthor);

        let displayPages = document.createElement("div");
        displayPages.textContent=(el.pages);
        displayPages.className = "pages"
        displayBox.appendChild(displayPages);

        let displayRead = document.createElement("div");
        displayRead.textContent=(el.read);
        displayRead.className = "read"
        displayBox.appendChild(displayRead);
        
        displayContainer.appendChild(displayBox);
    });

}

console.log(myLibrary)