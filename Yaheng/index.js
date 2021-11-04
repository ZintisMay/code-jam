function getUsers() {
    fetch("https://randomuser.me/api/?results=100")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        fetchedResult = data.results;
        console.log(fetchedResult)
        fetchedResult.forEach((ele) => {
            obj = {"name": ele.name.last + " " + ele.name.first,
                    "age": ele.dob.age,
                    "GPA": Math.floor(Math.random() * 4) + 1
        }
        console.log(obj)
        })
      });
  }
  
getUsers();
