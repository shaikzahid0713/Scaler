const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('Promise Resolved!');
    }, 2000);
});

function fetchData() {
    const result = await p;
    console.log(result, ' -> From .then()');
    console.log('Create Impact');
}

fetchData();