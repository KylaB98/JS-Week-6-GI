//MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
//You are given a target value to search. If found in the array return its index, otherwise return -1.
//You may assume no duplicate exists in the array.


/* const nums = [4, 5, 6, 7, 0, 1, 2]
function findNum(numbers, target){
    let targetFound= -1
    for (let i = 0; i<numbers.length; i++){
        if (target === numbers [i]){
            targetFound=i
        }
    } 
    return targetFound
}

console.log(findNum(nums , 6)) */


let num1 = [4, 5, 12, 16, 100, 0, 75];
let index = num1.indexOf(0);

console.log(index)

let num2 = [4, 5, 12, 16, 100, 0, 75];
let index2 = num2.indexOf(3);

console.log(index2);