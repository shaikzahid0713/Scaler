
let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
// Size and properties of an element - https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
let topOfPage = document.querySelector('html').getBoundingClientRect().height;

document.addEventListener('keydown', function(event) {
    console.log(event.key);
    let key = event.key;
    if (key === '1') {
        s1.scrollIntoView();
    }
    else if (key === '2') {
        s2.scrollIntoView();
    }
    else if (key === '3') {
        s3.scrollIntoView();
    }
    else if (key === 't') {
        window.scrollBy(0, -topOfPage)
    }
    else if (key === 'b') {
        window.scrollBy(0, topOfPage)
    }
});