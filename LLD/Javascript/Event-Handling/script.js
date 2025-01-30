let button = document.querySelectorAll('.delete');

/* 
For each .delete button, an event listener is added that listens for a click event. When the button is clicked:

The event's target is the button itself (button[i]).
event.target.parentElement.remove() removes the parent element of the clicked button (likely the whole ticket or item container).
*/

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function(event) {
        event.target.parentElement.remove();
    })
}