let filter = document.querySelector('select');
console.log(filter);

let allMovies = document.querySelector('.allMovies');


/* 
    1. Filter Event Listener: The event listener listens for the change event on the filter element (likely a dropdown or select menu).

    2. Category Selection: It captures the selected category from filter.value.

    3. Ticket Visibility: You then query all elements with the #content ID (this might be incorrect as IDs are usually unique, but it's fine if you're using them for this case). Based on the selected category, you either show or hide parent elements of the selected content.

    4. Visibility Logic:
        If a valid category is selected (anything other than 'none'), the code iterates through all #content elements and compares their parent element’s data-category attribute to the selected category. If they match, the parent’s display is set to block; otherwise, it's set to none.
        If 'none' is selected, all tickets are shown by setting their parent’s display to block.

Potential Improvements or Considerations:

    1. Unique IDs: As mentioned, #content should generally be unique. If you intend to select multiple elements, consider using classes instead (e.g., .content).
    2. Event Listener Optimization: If the number of tickets (elements) is large, this logic could be optimized using techniques like documentFragment or simply by using requestAnimationFrame for smoother performance.
    3. Better Categorization: Ensure the data-category attributes are being applied correctly to the parent elements to prevent issues.

*/

filter.addEventListener('change', function(event) {

    let category = filter.value;
    console.log(category);

    let allTickets = document.querySelectorAll('#content');

    if (category !== 'none') {
        for (let i = 0; i < allTickets.length; i++) {
            if (category === allTickets[i].parentElement.getAttribute('data-category')) {
                allTickets[i].parentElement.style.display = 'block';
            }
            else {
                allTickets[i].parentElement.style.display = 'none';
            }
        }
    }
    else {
        for (let i = 0; i < allTickets.length; i++) {
            allTickets[i].parentElement.style.display = 'block';
        }
    }
})