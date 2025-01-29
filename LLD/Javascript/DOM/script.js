console.log(document);

// There are three methods to get an element in JS
// 1. getElementById
// 2. querySelector
// 3. querySelectorAll


const btn = document.getElementById("click_me");
console.log(btn);

btn.addEventListener('click', handleClick);

function handleClick() {
    console.log("Click Me used")

    let event = document.createElement("p")
    event.innerText = "I am appended when you click the button"

    let parent = document.querySelector(".parent")
    parent.appendChild(event);
}


// const btn = document.querySelector()

// btn.removeEventListener('click', handleClick);


let parentList = document.querySelector('ul');
let childLists = document.querySelectorAll('li'); // NodeList

console.log(childLists[0]);

let eight = document.createElement('li');
eight.innerText = "8";

let nine = childLists[7];


// .insertBefore() takes two parameters. First is the new element to append and second the existing element where the first parameter inserts above it.
parentList.insertBefore(eight, nine);



const allCards = document.querySelectorAll('.card');

// The for loop in the code iterates through each element in the allCards collection, attaching a double-click event listener to each element

// If its data-color attribute is 'used', the last class is removed, and the data-color is updated to that class name.

// If the data-color is not 'used', the class specified in data-color is added to the element, and the data-color is set to 'used'.

for (let i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener('dblclick', function(event) {
        console.log(event.target);
        let dataColorAttribute = event.target.getAttribute('data-color');
        let elementClasses = event.target.classList;
        if (dataColorAttribute === 'used') {
            let length = elementClasses.length;
            let lastClass = elementClasses[length - 1];
            elementClasses.remove(lastClass);
            event.target.setAttribute('data-color', lastClass);
        }
        else {
            event.target.classList.add(dataColorAttribute);
            event.target.setAttribute('data-color', 'used');
        }
    })
}
 