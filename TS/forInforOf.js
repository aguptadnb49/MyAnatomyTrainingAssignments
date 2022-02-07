var arr = new Array(34, 67, 32, 34, 76, 23, 98, 65, 2, 12, 45, 78);
console.log('for In:');
for (var index in arr)
    console.log(arr[index]);
console.log("======================");
console.log('for Of:');
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var data = arr_1[_i];
    console.log(data);
}
