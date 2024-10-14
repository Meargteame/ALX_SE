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
longerName("ABEBE","ABE");


// exercise 2
function isEmpty(array){
    if(array.length === 0){
        console.log("Yes It is Empty");
    }
    else{
        console.log("No it is not Empty");
    }
}
isEmpty([1,2,3]);
isEmpty([]);



// exercise 3 


// compare(2,2);