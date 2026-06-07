// Importing functions from cartModule (which is local module created by developer)

const {addToCart, changeQty} = require("./cartModule")

console.log('Hello, World!')
console.log('This is a simple Node.js application.')
console.log(10 + 20)
let l=[10,"apple","banana",40]
l.forEach((value, index) => {
    console.log(value, index)
})

console.log(addToCart());
console.log(changeQty());