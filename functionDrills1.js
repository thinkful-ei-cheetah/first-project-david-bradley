function getYearOfBirth (age) {
    return 2019 - age
}


function createGreeting (name, age){
    const yearOfBirth = 2019 - age;
    return ("Hi my name is " + name + " and I'm " + age + " years old. I was born in " + yearOfBirth + ".");
    }

const greeting1 = createGreeting('David', 24);
console.log(greeting1);



