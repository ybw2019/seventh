let btn = document.getElementById("btn");

function click() {
    function makeClosures(arr, fn) {
        let result = new Array();
        result = arr;
        for (let i = 0; i < result.length;) {
            result[i] = fn.bind(result[i], ++i);
        }
        return result;
    }
    let array = [1, 2, 3];
    let foo = (x) => {
        console.log(x);
    }
    let fun = makeClosures(array, foo);
    for (let i = 0; i < fun.length; i++) {
        fun[i]();
    }
}

btn.addEventListener("click", click, false);