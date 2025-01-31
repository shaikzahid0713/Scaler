let currentCell = document.querySelector('.cell');
console.log(currentCell);
currentCell.addEventListener('pointermove', function(event) {
    currentCell.style.backgroundImage = "url('https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/055/850/original/jail.jpg?1699030242')";

})

currentCell.addEventListener('pointerleave', function(event) {
    currentCell.style.backgroundImage = "";

})