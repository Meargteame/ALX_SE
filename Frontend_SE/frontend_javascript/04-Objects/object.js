
// to get the value of the property

// Object.key

const js = {
    name:"JavaScript",
    purpose:"Full Stack development",
    level:"high level"
}

// assigning to object properties from outside the object itself 
// so objects are mutuable , we can change the values inside them 


js.purpose = "Web Development";
// console.log(
// js.name.startsWith("Java")
// )
js.description = "A one and only one left language for the web ."

// console.log(js);


const Meareg ={
    name :"Meareg Teame",
    languages :["Tigrigna","Amharic","English"],
    monkey:true,
    vehicle:"2 working Legs hope will have in the next days.",
    hobbies:["talking with frineds","Gaming","listening"],
    friends:["Anah","Mewded"],
    programmingLanguages:["C","Python","Javascript"],
// object Methods 

    callName(){
        return this.name
    } 

}

console.log(
Meareg.callName()
)







// Nested objects 
// -objects inside objects 
// objects inside of arrays
