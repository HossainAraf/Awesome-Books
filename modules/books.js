class Books {
  createObject() {
    this.books = [
      {
        id: 1,
        title: 'Lorem ipsum',
        author: 'Testeroo Testyy',
      },
      {
        id: 2,
        title: 'Second Book',
        author: 'Testeroo Testyy',
      },
    ];
    if (localStorage.getItem('books') !== null) {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
  }

  displayBooks() {
    const x = this.books;
    let book = '';
    let displayType = 1;
    for (let i = 0; i < x.length; i += 1) {
      book += `<div id='books-container${displayType}'>`;
      book += `<div id='book-author'><p id="booktext">"${x[i].title}" by ${x[i].author}</p></div>`;
      book += `<button onclick="removeBook(${x[i].id})">Remove</button></div>`;
      displayType = displayType === 1 ? 2 : 1;
    }
    document.getElementById('display').innerHTML = book;
  }

  addBooks() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title !== '' && author !== '') {
      const bookId = this.books.length + 1;
      this.books.push({ id: bookId, title, author });
      this.displayBooks();
      document.querySelector('form').reset();
      this.saveToLocalStorage();
    }
  }

  removeBooks(removeId) {
    this.books = this.books.filter((book) => book.id !== removeId);
    this.displayBooks();
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

export default Books;
