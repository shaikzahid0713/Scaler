const mainContentRef = document.querySelector('.main-content');
const modalContentRef = document.querySelector(".modal-content");

function toggleModal(isHidden) {
    isHidden ? modalContentRef.classList.remove('hide') : modalContentRef.classList.add('hide');
}

function createNewTask(targetValue) {
    const newTask = `
    <div class="task-priority"></div>
    <div class="task-title">123</div>
    <div class="task-description" contenteditable>${targetValue}</div>`;

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = newTask;

    mainContentRef.appendChild(taskDiv);
}

const toggleModalRef = document.querySelector('.manage_tasks_container .add-btn');
const modalBox = document.querySelector(".modal-content");
toggleModalRef.addEventListener('click', function () {
    const isHidden = modalBox.classList.contains('hide');
    toggleModal(isHidden);
})

const newTaskCreation = document.getElementById('task_description');
newTaskCreation.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        toggleModal(false);
        createNewTask(event.target.value);
        event.target.value = "";
    }
})
