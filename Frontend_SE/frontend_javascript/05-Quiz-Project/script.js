// 
// TODO 1: Declare & assign variables pointing to the corresponding element(s)

// statement should be the "statement" div
const statement = document.getElementById('statement');
// optionButtons should be all the elements within the "options" div
const optionButtons = document.querySelectorAll('#options button')


// the buttons 


// explanation should be the "explanation" div
const explanation = document.getElementById('#explanation');

// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation 

let fact = {
    statement:"Javascript is loosely typed language !",
    answer : true,
    explanation:" Javascript In itself does not care about your type "

}

// TODO 3: Set the text of the statement element to the fact's statement

statement.textContent = fact.statement;



// TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
// disable(button) should set the button element's attribute "disabled" to the value ""
// enable(button) should remove the attribute "disabled" from the button element


const trueButtons = document.getElementsByName("true")
const buttonTrue = trueButtons[0];

const falseButtons = document.getElementsByClassName("false")
const buttonFalse = falseButtons[0];


// taking individual button elements
const enable = (button) => {
    button.removeAttribute("disabled");
}

const disable = (button) => {
   button.setAttribute("disabled","");
    
}

// button.enable();

// TODO 5: Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) should return true if the guess matches the fact's answer

const isCorrect = guessString => {
    return guessString === fact.answer.toString();
}



// handling events 
buttonTrue.addEventListener('click',(event)=> {
    let button = event.target.textContent.toUpperCase()
    event.target.textContent = button;
})


let h1 = document.querySelector('h1');
console.log(h1);


h1.addEventListener('mouseover',(event) => {
   let el = event.target.textContent ='Hovering';;
   console.log(el);

})
h1.addEventListener('mouseout', (event) =>{
    let el = event.target.textContent = 'Quize.js'
    console.log(el);
})

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
        // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element


        // TODO 7: Within the event handler function, 
        // Use a for loop to disable all the option buttons


        // TODO 8: Within the event handler function,
        // Get the guessed value from the clicked button
        // Use a conditional to compare the guess to the fact's answer
        // and add the "correct"/"incorrect" class as appropriate


