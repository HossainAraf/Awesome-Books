import Books from './modules/books.js';
import dateTime from './modules/luxon.js';

const listLink = document.querySelector('#list-link');
const addNewLink = document.querySelector('#add-new-link');
const contactLink = document.querySelector('#contact-link');
const list = document.querySelector('#lists');
const addNew = document.querySelector('#add-new');
const contactUs = document.querySelector('#contact-us');

function enableList() {
  list.style.display = 'flex';
  addNew.style.display = 'none';
  contactUs.style.display = 'none';
}

function enableAddNew() {
  list.style.display = 'none';
  addNew.style.display = 'flex';
  contactUs.style.display = 'none';
}

function enableContactUs() {
  list.style.display = 'none';
  addNew.style.display = 'none';
  contactUs.style.display = 'flex';
}

listLink.addEventListener('click', enableList);
addNewLink.addEventListener('click', enableAddNew);
contactLink.addEventListener('click', enableContactUs);

// Date time
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
