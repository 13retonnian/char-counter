// coded by Christopher Barber atrributed to Tony Grimes code
// 1. Create `textarea` variable
const textArea = document.querySelector("textarea");
// 2. Create `counter` variable
let counter = 0;
// 3. Create character `limit` variable
const limit = textArea.getAttribute("maxlength");
// 4. Create event listener to update `counter`
const paragraph = document.querySelector("p");
//let counterClass = paragraph.classList("counter");


const countInput = function(event) {
  event.preventDefault();
  counter++;
  //pageCounter.textContent = counter;
  paragraph.textContent = `${counter} / ${limit}`;
}

textArea.addEventListener("input", countInput);
