let click_me = document.getElementById('click-btn');


click_me.addEventListener('click', function(event) {
    console.log(event.target);
    let p_tag = document.createElement('p');
    p_tag.innerText = 'Hello';
    let parent = document.querySelector('.parent');
    parent.appendChild(p_tag);
})