//EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 

let input = [1, 24, 16, 8, 22, 4]

function average(array){
    let total = array.reduce((a,b) => a + b, 0);
    return total / array.length;
}

console.log(average(input))