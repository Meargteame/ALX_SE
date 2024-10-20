let response = await fetch("https://dog.ceo/api/breeds/image/random");

let body = await response.json()
console.log(body);
