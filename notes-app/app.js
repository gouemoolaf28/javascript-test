// console.log('Hello World');

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array)
//     if (value)
//       count++
//   return count;
// }
// const array = [1, 2, 3];

// console.log(countTruthy(array))

// ------------------------------------------------------

// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'string')
//       console.log(key, obj[key]);
//   }
// }

// const movie = {
//   title: 'a',
//   releaseYear: 2018,
//   rating: 4.5,
//   director: 'b'
// }

// showProperties(movie);

// ---------------------------------------------------------

const circle = {
  radius: 1,
  draw() {
    console.log('draw')
  }
}

// for (let key in circle) {
//   console.log(key, circle[key]);
// }

// for (let key of Object.keys(circle)) {
//   console.log(key, circle[key]);
// }

// const another = Object.assign({}, circle);
// console.log(another)

// const another = { ...circle };
// console.log(another)

// const message = "This is my first message";

const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' }
];

// const course = courses.find(c => {
//   return c.name === 'a';
// });
// const course = courses.find(function (c) {
//   return c.name === 'a';
// });

// console.log(course);

const numbers = [1, -1, 2, 3];
// numbers.forEach((number, index) => console.log(index, number))

// const test = numbers.every(function (value) {
//   return value >= 0;
// })
// const test = numbers.some(function (value) {
//   return value >= 0;
// })

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator - currentValue;
})

console.log(sum);