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
    // input = input.split("");
    input = input.split('craft block argon meter bells brown croon droop');
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
console.log(answer)

return answer; 

}
// console.log(decode('craft block argon meter bells brown croon droop'))

// 'craft block argon meter bells brown croon droop'.

// First letter	    Character number
// a	            2
// b	            3
// c	            4
// d	            5
