const showAddPanel = document.getElementById("show-addBook")
const hideAddPanel = document.getElementById("hide-addBook")
const addBookPanel = document.getElementById("addBook-panel")
const submitBook = document.getElementById("submit-addBook")

const title = document.getElementById("title-add")
const author = document.getElementById("author-add")
const pageCount = document.getElementById("pages-add")
const haveRead = document.getElementById("readStatus-add")

const bookPanel = document.getElementById("book-panel")

showAddPanel.addEventListener("click", () => {
  addBookPanel.classList.remove("hidden")
})

hideAddPanel.addEventListener("click", () => {
  addBookPanel.classList.add("hidden")
})

submitBook.addEventListener("click", () => {
  addBook(title.value, author.value, pageCount.value, haveRead.checked)
  addBookPanel.classList.add("hidden")
  console.log("made it")
})

let library = []

function Book(title, author, pageCount, haveRead) {
  this.title = title
  this.author = author
  this.pageCount = pageCount
  this.haveRead = haveRead
  this.delete = function () {
    library.splice(this, 1)
  }
}

function addBook(newTitle, newAuthor, newPageCount, newHaveRead) {
  const book = new Book(newTitle, newAuthor, newPageCount, newHaveRead)
  library.push(book)
  appendBook(book)
}

function appendBook(book) {
  console.log("trying to append book")
  let bookDiv = document.createElement("div")
  bookDiv.classList.add("book")
  bookDiv.innerHTML = `
    <div class="book">
      <div class="wrapper">
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Page Count: ${book.pageCount}</p>
        <p>Have Read: ${book.haveRead}</p>
        <button class="remove">Remove</button>
      </div>
    </div>
  `
  bookPanel.appendChild(bookDiv)
  setupRemoveButtons(document.querySelectorAll(".remove"))
}

function setupRemoveButtons(deleteButtons) {
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let book = e.target.parentElement
      library.splice(book, 1)
      book.parentElement.parentElement.remove()
    })
  })
}

window.onload = () => {
  addBook("The Hobbit", "J.R.R. Tolkien", 295, true)
  addBook("The Lord of the Rings", "J.R.R. Tolkien", 1216, false)
  addBook("The Silmarillion", "J.R.R. Tolkien", 480, false)
  //add more books here
  addBook("Hello", "World", 100, true)
}
