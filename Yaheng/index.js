function getUsers() {
  fetch("https://randomuser.me/api/?results=100")
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      fetchedResult = data.results;
      studentData = [];
      fetchedResult.forEach((ele) => {
        obj = {
          name: ele.name.last + " " + ele.name.first,
          age: ele.dob.age,
          GPA: Math.floor(Math.random() * 4) + 1,
        };
        studentData.push(obj);
      });
      console.log(studentData);
      displayStudentTable(studentData);
    });
}

getUsers();

const studentTable = document.getElementById("studentTable");

function displayStudentTable(studentData) {
  studentData.forEach((student) => {
    displayOneStudent(student);
  });
}

function displayOneStudent(student) {
  
  let html = `<div class="row">
  <span>Name: ${student.name}</span>
  <span>Age: ${student.age}</span>
  <span>GPA: ${student.GPA}</span>
  </div>`;
  studentTable.innerHTML += html;
}
