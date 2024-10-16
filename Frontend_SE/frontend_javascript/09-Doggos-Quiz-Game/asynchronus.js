// When We need to do something that takes long time 


// Javascript - can only do one task at a time .
// "single threaded"
// we still need the web browser to keep working 


console.log("First")

setTimeout(
    () => {
    console.log("Third")},
    1000)
console.log("Second");