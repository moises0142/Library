let book20 = new Book("ti", "au", "100", "read");
let book30 = new Book("ble", "blo", "29", "ye");

let addNewBookButton = document.querySelector(".addNewBookButton");
let dialog = document.querySelector("dialog");
let exit = document.querySelector(".x");
let bookName = document.querySelector('#name');
let authorName = document.querySelector('#author');
let numbPages = document.querySelector('#pages');
let isRead = document.querySelector('#read');
let addBookToLibraryButton = document.querySelector('.addBookToLibraryButton');

addNewBookButton.addEventListener("click" , addBookButton);
addBookToLibraryButton.addEventListener('click', addBookLibraryButton);
isRead.addEventListener('click',readOrReadent)
let reada=0;


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

function readOrReadent(){
    if(reada<1){
        reada=+1;
    } else{
        reada=-1;
    }

}


myLibrary.push(book20);
myLibrary.push(book30);

function addBookButton(){
    console.log("yomama")
    dialog.classList.toggle('dialog')
    dialog.showModal(); 

}

exit.addEventListener("click", exitEvent);

function exitEvent(){
    dialog.close();
    dialog.classList.toggle('dialog')
}

window.onload = function (){
    displayBooks();
}
    
function addBookLibraryButton(event){
    let name = bookName.value;
    let author = authorName.value;
    let pages =numbPages.value;
    let read = reada;
    let mimi =new Book(name,author,pages,read)
    myLibrary.push(mimi);
    let [last] = myLibrary.slice(-1);
    displayBooks(last);
    event.preventDefault();
    exitEvent();
}

let num=0;

function displayBooks(last){    

    if (num === 0){
        
        myLibrary.forEach((el) =>{

            let displayContainer = document.querySelector(".booksContainer");

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
            num=+1;

        });
    }
    else{
        let displayContainer = document.querySelector(".booksContainer");
        
        
        let displayBox = document.createElement("div");
        displayBox.className = "displayBox"
        
        let displayTitle = document.createElement("div");
        displayTitle.textContent=(last.title);
        displayTitle.className = "title"
        displayBox.appendChild(displayTitle);
        
        let displayAuthor = document.createElement("div");
        displayAuthor.textContent=( last.author);
        displayAuthor.className = "author"
        displayBox.appendChild(displayAuthor);
        
        let displayPages = document.createElement("div");
        displayPages.textContent=(last.pages);
        displayPages.className = "pages"
        displayBox.appendChild(displayPages);
        
        let displayRead = document.createElement("div");
        displayRead.textContent=(last.read);
        displayRead.className = "read"
        displayBox.appendChild(displayRead);
        displayContainer.appendChild(displayBox);
        num=1
        console.log(last);
    }
}


