console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector('#launchButton');
console.log(launchButton)
const confirmButton = document.querySelector('#confirmButton');
console.log(confirmButton)
const cancelButton = document.querySelector('#cancelButton');
console.log(cancelButton)

// B- MESSAGES
const successMessage = document.querySelector("h1.success");
console.log(successMessage)
const failureMessage = document.querySelector('h1.failure');
console.log(failureMessage)
// C- MODAL
const modal = document.querySelector(".modal");
console.log(modal)

// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute
launchButton.onclick = function(){
    console.log("But what happened to the guy...")
}
//  C- element.addEventListener('click', callback)
launchButton.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);
    // console.log(event.target.nodeName);
})

// function addEventListener(whatToListenFor, whatToDo){
//     if (whatToListenFor === 'click'){
//         whatToDo();
//     }
// }
document.addEventListener('click', function(event) {
    console.log(event.target);
    if(event.target === launchButton){
        console.log("Clicking the launch button!");
    } else {
        console.log("Clicking somewhere else...")
    }
})

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
function launch(){
    modal.classList.remove('off');
//     successMessage.classList.add('off');
//     failureMessage.classList.add('off');
}
launchButton.addEventListener('click', launch);
// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
function confirm(){
    successMessage.classList.remove('off');
    modal.classList.add('off');
}
confirmButton.addEventListener('click', confirm);
// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
function cancel(){
    failureMessage.classList.remove('off');
    modal.classList.add('off');
}
cancelButton.addEventListener('click', cancel);

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
function escKey(event){
    if(event.key === 'Escape'){
        modal.classList.add('off');
    }
}
document.addEventListener('keydown', escKey)
// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
