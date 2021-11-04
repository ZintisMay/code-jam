console.log("script tag");

const userBuilder = {
  firstNames: [
    "John",
    "Jacob",
    "Mary",
    "Sally",
    "Gary",
    "Stacey",
    "Tabitha",
    "Karen",
    "Kelley",
    "Adam",
    "Ashley",
  ],
  lastNames: [
    "Finkel",
    "Bukowski",
    "Deluca",
    "May",
    "Barsnica",
    "Faulkner",
    "Montgomery",
    "Patterson",
  ],
  pickRandom: function (arr) {
    return arr[rand(arr.length)];
  },
  generateNamePair: function () {
    return [this.pickRandom(this.firstNames), this.pickRandom(this.lastNames)];
  },
  generateAge: function () {
    return 20 + rand(40);
  },
  generateGPA: function () {
    return rand(40) / 10;
  },
};

function rand(hi) {
  return Math.floor(Math.random() * hi);
}

function generateRandomUser() {
  let names = userBuilder.generateNamePair();
  return {
    firstName: names[0],
    lastName: names[1],
    age: userBuilder.generateAge(),
    gpa: userBuilder.generateGPA(),
  };
}

function generateXUsers(quantity) {
  let userArray = [];
  for (var x = 0; x < quantity; x++) {
    userArray.push(generateRandomUser());
  }
  return userArray;
}

const userArray = generateXUsers(100);

console.log(userArray);
