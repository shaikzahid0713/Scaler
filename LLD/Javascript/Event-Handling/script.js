let double = document.getElementById('double');

double.addEventListener('click', function(event) {
    let first = document.createElement('button');
    first.setAttribute('class', 'first');
    first.innerText = 'First';

    let second = document.createElement('button');
    second.setAttribute('class', 'second');
    second.innerText = 'Second';

    double.parentElement.appendChild(first);
    double.parentElement.appendChild(second);


    console.log(event.target);
    console.log(event.currentTarget);
    
    event.target.remove();
    // event.currentTarget.removeChild(event.target);
    
})