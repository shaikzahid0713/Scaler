const rgbToColorName = {
    "rgb(255, 182, 193)": "lightpink",
    "rgb(144, 238, 144)": "lightgreen",
    "rgb(173, 216, 230)": "lightblue",
    "rgb(255, 160, 122)": "lightsalmon"
};

const addBtn = document.querySelector('.add-action');
const removeBtn = document.querySelector('.remove-action');
const modalBox = document.querySelector('.modal-container');
const mainContainer = document.querySelector('main');
const modalPriorityContainer = document.querySelector('.modal-priority-container');
const allModalPriorityContainers = document.querySelectorAll('.color-modal');
let isColorSelected = false;
let bgColor = 'lightsalmon';
let removeTaskFlag = false;

function createTicket(ticketID, ticketBackgroundColor, ticketDescription) {
    const newTicket = document.createElement('div');
    newTicket.classList.add('ticket-container');
    newTicket.style.backgroundColor = ticketBackgroundColor;
    newTicket.innerHTML = `
                <div class="ticket-id">${ticketID}</div>
                <div class="ticket-description">${ticketDescription}</div>
                <div class="ticket-lock">
                    <i class="fa-solid fa-lock"></i>
                    <i class="fa-solid fa-lock-open"></i>
                </div>`;
    mainContainer.appendChild(newTicket);
}

addBtn.addEventListener('click', function(event) {
    if (modalBox.classList.contains('hide')) {
        modalBox.classList.remove('hide');
    } else {
        modalBox.classList.add('hide');
    }
})

modalPriorityContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('color-modal')) {
        allModalPriorityContainers.forEach((priorityContainer) => {
            console.log(event.target);
            priorityContainer.classList.remove('active');
        });
        event.target.classList.add('active');
        bgColor = window.getComputedStyle(event.target).backgroundColor;
        console.log(bgColor);
        isColorSelected = true;
    }
})

modalBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (isColorSelected) {
            const ticketID = Math.random().toString(36).substring(2);
            const ticketDescription = event.target.value;
            createTicket(ticketID, bgColor, ticketDescription);
            modalBox.classList.add('hide');
            event.target.value = "";
        }
        else {
            alert('Priority Color is not selected');
        }
    }
})


// Remove Button Functionality
removeBtn.addEventListener('click', function(event) {
    removeTaskFlag = !removeTaskFlag;
    if (removeTaskFlag) {
        alert("Ticket Removal Action Activated");
        removeBtn.style.color = 'red';

    }
    else {
        alert("Ticket Removal Action Dectivated");
        // since event is targeting remove button
        event.target.style.color = "white";
    }
})

mainContainer.addEventListener('click', function(event) {
    console.log(mainContainer.childElementCount);
    if (removeTaskFlag && event.target.classList.contains('ticket-container')) {
        event.target.remove();
    }
})