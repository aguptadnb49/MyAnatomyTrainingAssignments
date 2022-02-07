//find maximum of three numbers

function maxOfThree(input1:number,input2:number,input3:number):number{
    if(input1>input2 && input1>input3)
        return input1;
    else if(input2>input1 && input2>input3)
        return input2;
    
    return input3;
}
console.log(23,4,67)
console.log('maximum of the three inputs is: '+maxOfThree(23,4,67))