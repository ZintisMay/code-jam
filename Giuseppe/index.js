function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomStudents() {
    const students = [];
  
    while (students.length <= 100) {
      students.push({});
    }
  
    const names = ["Giuseppe", "Zintis", "Brad", "Yaheng", "Alex"];
    const lastNames = ["De Luca", "Random", "Smith", "Avantguard", "Chase"];
    const ages = [18, 54, 20, 34, 62, 51];
    const GPAs = [4.0, 3.5, 2.8, 3.6, 1.7];
  
    for (let i = 0; i < students.length; i++) {
      students[i].name = names[randomNumber(0, 4)];
      students[i].lastName = lastNames[randomNumber(0, 4)];
      students[i].age = ages[randomNumber(0, 5)];
      students[i].GPA = GPAs[randomNumber(0, 4)];
    }
    return students
  }
  
  console.log(randomStudents())
  
  const displayMessage = function (message) {
    document.querySelector('.first').textContent = message;
  };