var a = [2, 4, 6, 8];
function myPush(array, value) {
    var length = array.length;
    // console.log(length);
    array[length] = value;
    return array;
}
// a = myPush(a, 5);
//  console.log(a);

function myPop(array) {
    let newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        // console.log(array[i]);
        newArray[i] = array[i];
    }
    return newArray;
}
// console.log(myPop(a));

function mySlice(array, start, end) {
    let newArray = [];
    let index = 0;
    for (let i = start; i < end; i++) {
        newArray[index] = array[i];
        index++
    }
    return newArray;
}
// console.log(mySlice(a, 1, 3));

function myJoin(array, value) {
    let string = array[0];
    for (let i = 1; i < array.length; i++) {
        string = string + value + array[i];
    }
    return string;
}
// console.log(myJoin(a, " & "));

function myTostring(array) {
    let string = array[0];
    for (let i = 1; i < array.length; i++) {
        string = string + "," + array[i];
    }
    return string;
}
// console.log(myTostring(a));

function myShift(array) {
    let newArray = [];
    let index = 0;
    for (let i = 1; i < array.length; i++) {
        newArray[index] = array[i];
        index++;
    }
    return newArray;
}
// console.log(myShift(a));

var a = [2, 4, 6, 8];
function myUnshift(array, value) {
    let newArray = [];
    let index = 1;
    for (let i = 0; i < array.length; i++) {
        newArray[index] = a [i];
        index++;      
    }
    newArray[0] = value;
    return newArray;
}
let x = myUnshift(a, 10);
console.log(x);

function myIndexOf(array, element, index) {
    if(array[index] === element){
        return true;
    }else{
        return false;
    }
}
console.log(myIndexOf(a, 4, 2))

b = 0;
console.log(b);