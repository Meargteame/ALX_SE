

// Accessing the Array using the square brackets 
// arrayName['index']

// Array methods 
/**
 * .length() - returns the length of the array
 * .indexOf(value) - returns the index of the value where it is in.
 * .includes("value") - returns a boolean value of true or false.
 * .pop() - removing the last index of the array.
 * .push('value') - adding value to the end of the array. and returns the length of the array after the pushing you have made 
 * 
 * .sort() - sorts the values of the arrays
 * .join("value") - joins the array values  do to the indicated thingy in the join() method 
    ex : join(&) , join(" ")
 * .concat("value") - concatenates a value with the array. and returns a new concatenated array 
     Means it does not change the old array - instead it creates a new array container .
 */


// Strings in javascript are immutable - the values inside them can not be changed  
// Arrays in javascript are mutuable - the values inside them can be changed 

// use immutable things in javascript as much as possible 


// varibales and Arrays

let array1 = [1,2,3]
array2 = array1;

console.log(array1)
console.log(array2)

array1[1] = 4;

console.log(array1)
console.log(array2)
