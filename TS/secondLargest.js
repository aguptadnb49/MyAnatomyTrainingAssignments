var arr2 = new Array(12, 45, 7, 32, 12, 67, 98, 32, 11);
var largest = arr2[0];
var secondLargest;
for (var index in arr2) {
    if (arr2[index] > largest) {
        secondLargest = largest;
        largest = arr2[index];
    }
}
console.log(arr2);
console.log("The Second largest in array: ".concat(secondLargest));
