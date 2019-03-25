function jediName (firstName, lastName) {
    // let firstPart = lastName.substring(0, 2)
    // let secondPart = firstName.substring(0, 1)
    // return firstPart + secondPart
    return lastname.substring(0, 2) + firstName.substring(0, 1)
}

function beyond (num) {
    if (num == Infinity || num == NEGATIVE_INFINITY) {
        console.log ('And Beyond')
    } else if (num > 0) {
        console.log ('To Infinity')
    } else if (num < 0) {
        console.log ('To Negative Infinity')
    } else if (num == 0) {
        console.log ('Staying Home')
    } 
}

function decode (input) {
    input = input.split(" ");
    let answer = '';

    for (let i = 0; i < input.length; i++) { 
        if (input[i][0] === 'a') { 
            answer = answer + input[i][1]; 
        } if (input[i][0] === 'b') { 
            answer = answer + input[i][2]; 
        } if (input[i][0] === 'c') { 
            answer = answer + input[i][3]; 
        } if (input[i][0] === 'd') { 
            answer = answer + input[i][4]; 
        } else { answer = answer + ' '; 
    } 
} 
return answer; 
}

console.log(decode('craft block argon meter bells brown croon droop'));
// console.log(decode('craft block argon meter bells brown croon droop'))

// 'craft block argon meter bells brown croon droop'.

// First letter	    Character number
// a	            2
// b	            3
// c	            4
// d	            5


function howManyDays (month, leapYear = false) {
    
    



    // return month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December" ? `${month} has 31 days` : month === "April" || month === "June" || month === "September" || month === "November" ? `${month} has 30 days` : leapYear ? `${month} has 29 days` : `${month} has 28 days`;





    // if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
    //     return `${month} has 31 days`;
    // }

    // if (month === "April" || month === "June" || month === "September" || month === "November") {
    //     return `${month} has 30 days`;
    // }

    // if (month === "February") {
    //     if (leapYear === true) {
    //         return `${month} has 29 days`;
    //     }
    //     return `${month} has 28 days`;
    // }

    // else {
    //     return 'Please enter a valid month';
    // }



    let result;
    switch(month) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            result = `${month} has 31 days`;
            break;
        case "February":
            result = `${month} has ${leapYear ? 29 : 28} days`;
            break;
        default:
            result = `${month} has 30 days`;
            break;
    }
    return result;
}
console.log (howManyDays("February", true))
