// Conditionals
    // if statements let us execute code under certain condition 
        // if / else 

function compare(x,y){
    if(x >y){
        console.log(x , "is greater than", y);
    }
    else if(x < y){
        console.log(x , "is less than ", y);
    }
    else{
        console.log(x ,"x is equal to ",y);
    }
}

// exercise 1 
function longerName(firstName, lastName){
    if( firstName > lastName){
        console.log(firstName, "is Longer than ", lastName);
    }
    else if( firstName < lastName){
        console.log(firstName, "is not longer than",lastName);
    }else{
        console.log(firstName ,"is equal to ",lastName);
    }
}
// longerName("ABEBE","ABE");


// exercise 2
function isEmpty(array){
    if(array.length === 0){
        console.log("Is  empty");
      return true;
    }
    else {
        console.log("IS NOT EMPTY");
        return false;
    }
}
// console.log(
// isEmpty([1,2,3])
// )
// console.log([]);

// isEmpty([]);



// exercise 3 
function isTruthyFalsy(array){

    if(isEmpty()){
        return "Truthy ";
    }
    else{
        return "Falsy";
    }
}

// isTruthyFalsy([1,2]);
// isTruthyFalsy([]);
// isTruthyFalsy("");
// compare(2,2);


// Logical and ternary operators

const age1 = 12;
const age2 = 20;

const isEligible = (age) => {
    const variable = (age) > 18 ? console.log("You are allowed to Drivr Licence!") : console.log("You are not eligible for the driver licence !");
}

// isEligible(age1);
// isEligible(age2);


// LOOPS 
// lets  run the same chunk of code multiple time.

//for loop 
// for of  - 
    // => also to iterate over characters in a string .
// for in 
