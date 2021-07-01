//Question 1
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(Object.keys(student).toString());

//Question 2
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
delete student.rollno;
console.log(Object.keys(student).toString());

//Question 3
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(Object.keys(student).length);

//Question 4
var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
console.log(Object.keys(library[0]).toString());
for (var i = 0; i < 3; i++) {
  console.log(Object.values(library[i]).toString());
}
var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
console.log(Object.entries(library[0]).toString());

//Question 6
var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

function sort1(a, b) {
  return b.libraryID - a.libraryID;
}

console.log(library.sort(sort1));
