let arr1=new Array(12,45,7,32,12,67,98,32,11);
let small=arr1[0];

for(let index in arr1)
{
    if(arr1[index]<small)
        small=arr1[index];
}
console.log(arr1)
console.log(`Smallest number in the array: ${small}`);