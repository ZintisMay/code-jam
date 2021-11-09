
const firstNames = ["Brad", "Zintis", "Joe", "Phoebe", "Giuseppe"];

const lastNames = ["Jones", "Smith", "Brown", "White", "Johnson"];

randomFirst = function () {
  random = Math.floor(Math.random() * 4 + 1);
  return firstNames[random]
};

randomLast = function () {
  random = Math.floor(Math.random() * 4 + 1);
  return lastNames[random]
};


const randomAge = () => Math.trunc(Math.random() * 72 + 1);

const randomGPA = () => Math.trunc(Math.random() * 4 + 1);

function generateStudent() {
  const studentList = {
    firstName: randomFirst(),
    lastName: randomLast(),
    age: randomAge(),
    gpa: randomGPA(),
  };
  return studentList
    
}
function generateStudents(num) {
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push(generateStudent());
    }
    return result
}

const student = generateStudents(100)

var tableContent = document.getElementById("tableContent")

student.forEach((ele) => {
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  td1.innerHTML = ele.firstName
  td2.innerHTML = ele.lastName
  td3.innerHTML = ele.age
  td4.innerHTML = ele.gpa
  tr.append(td1, td2, td3, td4)
  tableContent.appendChild(tr)
})




