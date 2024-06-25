// Synchronous Programming
// function Alpha() {
//     console.log("Alpha");
// }

// function Beta() {
//     console.log("Beta");
// }

// // This function has wait time of 3 seconds which blocks Beta function to execute.
// function sync() {
//     console.log("Sync has Started");
//     const start = Date.now();
//     while((Date.now() - start) < 3000) {
//         // Wait for 3 Seconds
//     }
//     console.log("Sync Ended");
// }

// Alpha();
// sync();
// Beta();


// Asynchronous Programming
function Alpha() {
    console.log("Alpha");
}

function Beta() {
    console.log("Beta");
}

// Beta executes even when this function has not ended
function Async() {
    console.log("Async has started");
    setTimeout(() => {
        console.log("Async Ended");
    }, 3000);
}

Alpha();
Async();
Beta();


