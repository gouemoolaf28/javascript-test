const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holidays'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON);

const bookString = JSON.parse(bookJSON);
console.log(bookString);