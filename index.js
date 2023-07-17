import Books from './modules/books.js';
import dateTime from './modules/luxon.js';

document.querySelector('#date').innerHTML = dateTime;
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
