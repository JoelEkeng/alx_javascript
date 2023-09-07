const myObject = {
    type: 'object',
    value: 12
};
console.log(myObject);
let a = myObject.value;
function incr(a) {
    a++;
}
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);