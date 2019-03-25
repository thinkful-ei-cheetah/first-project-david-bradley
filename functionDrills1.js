function getYearOfBirth(age) {
    if (age < 0) {
        throw new Error("Age can not be negative");
    } else {
        return 2019 - age
    }
}

// try {
//     const greeting1 = createGreeting('Mike', -15);
// }
// catch {
//     console.log("Age can not be negative")
// }

function createGreeting(name, age) {
    if (!age) {
        alert('Arguments not valid')
    } else if (typeof age !== number) {
        throw new Error("Age must be a number")
    } else if (!name) {
        alert('Arguments not valid')
    } else if (typeof name !== string) {
        throw new Error("Name must be a word")
    }

    const yearOfBirth = 2019 - age;
    return ("Hi my name is " + name + " and I'm " + age + " years old. I was born in " + yearOfBirth + ".");
}




const greeting1 = createGreeting('David', 24);
console.log(greeting1);



