let btn = document.getElementById("btn");

function click() {
    function call2(obj, ...rest) {
        let props = rest;
        let target = obj;
        let fn = this;
        Object.prototype.fn = fn;
        target.fn(...props);
        delete Object.prototype.fn;
    }
    Function.prototype.call2 = call2;
    function sayInfo(age) {
        console.log("name:" + this.name)
        console.log("age:" + age)
    }
    var user = {
        name: "zzx"
    };
    sayInfo.call2(user, 100);
}

btn.addEventListener("click", click, false);