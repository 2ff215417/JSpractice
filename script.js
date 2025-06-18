//Creates button
//Createelelement buttn creates a BUTTON
const button = document.createElement('button'); 
 button.textContent = 'Press Me';

document.body.appendChild(button);

const list= document.createElement("ul");
document.body.appendChild(list);

// Adds click event
//creates an element (list) that makes entries
// changes text content inside the list item
//attaching entry inside my list -sort of like how we did it with our body and list or button.

button.addEventListener('click', () => {
    const entry = document.createElement('li');
    entry.textContent = "List Item";
    list.appendChild(entry); //inserts li into ul
});



// Adds a click event to the button
// Once clicked, alert pops up with message.
// button.addEventListener('click', () => {
//  alert("Daniel-san touched me");
// });

//Boolean is a true or false statement
//logic is just something that makes sense
//comparison is comparing two values. It always returns a Boolean

let Age=6;
if (Age<18){console.log("No Nittin!");}
 else if (18<Age){console.log("Yes Nittin!");}


