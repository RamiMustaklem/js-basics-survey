// compare between const, let, var

/*function greeting() {
    var name = "Jack";
    let age = 36;
    console.log('Hello');
}

console.log(name)
console.log(age)*/

var adult = true;

if (adult) {
    var myName = "Kyle";
    let age = 39;
    console.log("Shhh, this is a secret!");
}

console.log(myName);
// Kyle

console.log(age);
// Error!
