import Books from './modules/books.js';

const a = new Books();
a.createObject();
a.displayBooks();
a.saveToLocalStorage();

const form = document.getElementById('add-new-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  a.addBooks();
});

window.removeBook = (id) => {
  a.removeBooks(id);
};
