let students = [
    {
      lastName: "Doe",
      firstName: "John",
      age: 20,
    },
    {
      lastName: "Doe",
      firstName: "Jack",
      age: 21,
    },
    {
      lastName: "Doe",
      firstName: "Jace",
      age: 22,
    },
  ];
  
  for (var i = 0; i < students.length; i++) {
    console.log(
      `Hello, my name is ${students[i].firstName} ${students[i].lastName} and I am ${students[i].age} years old.`
    );
  }