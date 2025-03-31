const sum = (a,b) => a + b // = function(){}
const sub = (a,b) => a - b
const mul = (a,b) => a * b
const div = (a,b) => a / b

module.exports = {
    sum,
    sub,
    mul,
    div,
    resto: (a,b) => a % b
}