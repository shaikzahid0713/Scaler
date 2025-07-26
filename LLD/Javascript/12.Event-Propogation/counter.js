const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const count = document.getElementById('count');


let counter = 0;

decrementBtn.addEventListener('click', function() {
    if (counter > 0) {
        counter--;
    }
    count.innerText = counter;
})

incrementBtn.addEventListener('click', function() {
    counter++;
    count.innerText = counter;
})


resetBtn.addEventListener('click', function() {
    counter = 0;
    count.innerText = counter;
})