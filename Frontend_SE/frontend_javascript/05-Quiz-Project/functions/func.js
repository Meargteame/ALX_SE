function half(number){
    return number/2;
}
// console.log(half(200));


function getRandom(){
    return Math.random();
}

const rand = getRandom("Unexpected value");
// console.log(rand);




// return values 

function square(x){
    return x**2;
}
// return  statement specifies the function outputs value.


// // =>
// function multiply(num1 ,num2){
//     return num1 * num2;
// }
// function yell(value){
//     return value.toUpperCase();
// }

function longerThan(Array1, Array2){
    return Array1 > Array2;
}

// console.log(
// longerThan([1,2].length,[1,3,3].length)
// )


// Arrow functions 

// const add =  (x,y) => {
//     return x+y;
// }

// const addAndLog = (x,y) =>{
//     const sum = x +y;
//     console.log("Sum is  :" +sum);
//     return sum;
// }

// console.log(addAndLog(2,3))


const divide = (x,y) => {
    return x / y;
}
const whisper = (value) =>{
    const lc = value.toLowerCase();
    console.log(lc);
    return  (lc);
}
const shorterThan = (array1,array2) => array1 < array2;

console.log(
    whisper("LOWER CASE"),
    shorterThan([1,2],[2,3,4,3])
)

const result = divide(4,2);
console.log(result);

