console.log('Hello from vrit tech')

//declaring a variable
let data1 = "string sadald lorem";
data1 = false;
const data2 = "string";

var data3 = "string";
//number
let num = 10;
//boolean
let isLoggedIn = true;

//object key:value
let student = {
   name: "Nirajan kunwor",
   age: 10,
   isActive: true
}

let arr = ["Student 1", "Student 2", 10, student]

console.log(arr)

console.log(10 - 20)

// console.log(num === 20)

//COnditional statement
let marks = 30;
console.log(marks >= 80)
if (marks >= 80) {
   console.log('It is a distinction ', marks);
} else {
   console.log(`It is not a distinction ${marks}`);
}

///functions

function findOddNumber(num) {

   if (num % 2 === 0) {
      console.log(`${num} is an even number`)
   } else {
      console.log(`${num} is a odd number`)
   }
}

// const findOddNumber = () => {

// }

//call
findOddNumber(13);

const students = ["Adit", "Aditya", "Trishan"]



for (let student of students) {
   // console.log(students[i])
   console.log(student)
}



// for (let i = 1; i <= 10; i++) {
//    console.log("here", i)
// }

//Higher order array method

//map, forEach, filter

const newStudents = students.map((value, index) => {
   if (value != 'Adit') {
      return value;
   } else {
      return 'test'
   }

})

const filteredStudents = students.filter((value, index) => {
   if (value != 'Adit') {
      return value;
   } else {
      return 'test'
   }
})

console.log(newStudents)
console.log('-----------')
console.log(filteredStudents)

//DOM- Document Object Model


document.title = "Hey vrit"

// console.log(document.getElementById("hello"))
// console.log(document.querySelector("#hello"))
// console.log(document.querySelectorAll(".hey"))


// document.getElementById("hello").className = "text-primary"


function loginHandler(event) {
   event.preventDefault();
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   // console.log(email, password)
}
