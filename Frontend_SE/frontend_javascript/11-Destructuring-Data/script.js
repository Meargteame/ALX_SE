

// Destruturing an object which is inside an array 
const spices =[
    {
        "name":"Meareg",
        "nickname":"Preserverance"
    }
]


let {name,nickname} = spices[0]
// console.log(nickname,name);


// Destructuring the object alone 
const object ={
    "key1":"Value 1",
    "key2":"Value 2"
}

const {key1,key2} = object;


// console.log(key1);
// console.log(key2);


// Destructuring an array 


const [four,five,six] =[4,5,6];

// console.log(four);
// console.log(five);
// console.log(six);

// we can ignore the values in the array  we  don't need 
const [ten,twenty] = [10,20,30,40,50,60];

console.log(ten)
console.log(twenty)



