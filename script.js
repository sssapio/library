const btn = document.querySelector("#new-book");
const container = document.querySelector("#container");
const form = document.querySelector("#form-container");

class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  get checkStatus() {
    return this.check();
  }
  check() {
    return this.read === true || this.read === "true" ? "read" : "not read yet";
  }
  get toggleStatus() {
    return this.toggleReadStatus();
  }
  toggleReadStatus() {
    this.read = this.read === true || this.read === "true" ? "false" : "true";
  }
}
// function Book(title, author, pages, read) {
//   this.id = crypto.randomUUID();
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }
// Book.prototype.check = function () {
//   return this.read === true || this.read === "true" ? "read" : "not read yet";
// };

// Book.prototype.toggleReadStatus = function () {
//   this.read = this.read === true || this.read === "true" ? "false" : "true";
// };
const bookArr = [];

const displayBook = () => {
  container.innerHTML = "";
  bookArr.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book-card");
    bookElement.setAttribute("data-id", book.id);
    bookElement.innerHTML = `
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p class="statusText">Status: ${book.checkStatus}</p>
    <button class="removeBtn">Remove Book</button>
    <button class="changeStatus">Change Read Status</button>
    `;

    container.appendChild(bookElement);
    const removeBtn = bookElement.querySelector(".removeBtn");
    removeBtn.addEventListener("click", (e) => {
      const index = bookArr.findIndex((b) => b.id === book.id);
      if (index !== -1) {
        bookArr.splice(index, 1);
        displayBook();
      }
    });
    const statusText = bookElement.querySelector(".statusText");
    const changeStatus = bookElement.querySelector(".changeStatus");
    changeStatus.addEventListener("click", () => {
      book.toggleStatus;
      statusText.textContent = `Status: ${book.checkStatus}`;
    });
  });
};
btn.addEventListener("click", () => {
  form.innerHTML = `
  <form>
    <label for="title">Title</label>
    <input type="text" id="title" />
    <label for="author">Author</label>
    <input type="text" id="author" />
    <label for="pages">Pages</label>
    <input type="text" id="pages" />
    <label for="read">Status(True or False)</label>
    <input type="text" id="read" />
    <button id="submit-btn" type="submit">Submit</button>
    </form>
    `;

  const submitBtn = document.querySelector("#submit-btn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;

    const book = new Book(title, author, pages, read);
    bookArr.push(book);

    form.innerHTML = "";
    displayBook();
  });
});
console.log(5);
