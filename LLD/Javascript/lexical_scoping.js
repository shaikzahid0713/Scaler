var a = 30;
function parent() {
    var a = 20;
    function child() {
        console.log(a);
    }
    child();
}
parent();