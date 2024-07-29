var x = { id: 1 }
var y = x

console.log(x == y) // true

y.id = 2

console.log(y.id) // 2
console.log(x.id) // 2

// copy x object into new var z
var z = Object.assign({}, x)

z.id = 3

console.log(x)
console.log(y)
console.log(z)

var isZ3 = Object.is(y, x)

console.log(isZ3)
