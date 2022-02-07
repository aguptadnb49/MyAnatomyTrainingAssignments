var loanTypeAsked
function decideDurationAndROI(loanType){
    if(loanType=="Home"){
        loanTypeAsked="Home"
        loanApplication.duration.min=1;
        loanApplication.duration.max=25;
        loanApplication.roi.value="7%";
    } else if(loanType=="Car"){
        loanTypeAsked="Car"
        loanApplication.duration.min=1;
        loanApplication.duration.max=7;
        loanApplication.roi.value="9%";
    } else if(loanType=="Personal"){
        loanTypeAsked="Personal"
        loanApplication.duration.min=1;
        loanApplication.duration.max=5;
        loanApplication.roi.value="12%";
    }
}

function checkDuration(value){
    if(loanTypeAsked=="Personal"){

        if(value>5){
            alert("Duration can not be greater than 5 Years"+" for "+loanTypeAsked+" loan")
        }

    }else if(loanTypeAsked=="Car"){
        
        if(value>7){
            alert("Duration can not be greater than 7 Years"+" for "+loanTypeAsked+" loan")
        }

    } else if(loanTypeAsked=="Home"){

        if(value>25){
            alert("Duration can not be greater than 25 Years"+" for "+loanTypeAsked+" loan")
        }

    }
}

function calculateEMI(){

    var duration=parseInt(loanApplication.duration.value);
    var principle=parseInt(loanApplication.principle.value);
    var roi=parseInt(loanApplication.roi.value);

    var intrest=(duration*principle*roi)/100;

    var emmi=(intrest+principle)/(duration*12);

    loanApplication.emi.value=emmi;
}

//https://docs.microsoft.com/en-us/learn/challenges?id=c8e72ad9-91db-4f91-ba80-f98f40b4d78e



var customerInfoArray=[];
function saveCustomerInformation(){
    var customerObject={};
    customerObject.name=accountOpening.cname.value;
    customerObject.age=accountOpening.cage.value;
    customerObject.accountType=accountOpening.accType.value;
    customerObject.branchName=accountOpening.bname.value;
    customerObject.mobileNumber=accountOpening.mno.value;

    customerInfoArray.push(customerObject);
    console.log(customerObject)
    console.log(customerInfoArray)
    accountOpening.reset();
}

function displayNamesWithAccountType(){
                for(let i=0;i<=customerInfoArray.length;i++){
                    document.getElementById('display').innerHTML +="* "+customerInfoArray[i].name+" - "+customerInfoArray[i].accountType+"<br>"
                }
            }
    
function dispalyAllCustomer(){
    
for(let i=0;i<=customerInfoArray.length;i++){
    document.getElementById('display').innerHTML +=`<tr>
                                                        <td>${customerInfoArray[i].name}</td>
                                                        <td>${customerInfoArray[i].accountType}</td>
                                                        <td>${customerInfoArray[i].branchName}</td>
                                                        <td>${customerInfoArray[i].age}</td>
                                                        <td>${customerInfoArray[i].mobileNumber}</td>
                                                    </tr>
                                                    <br>
                                                    `
}

}

function remove(){

    document.getElementById('removeform').innerHTML=`
                                                        <input type="text" id="remove" placeholder="enter position to remove"><br>
                                                        <input type="button" value="remove" onclick="removeItem()">
                                                    `
}

function removeItem(){
    document.getElementById('display').innerHTML="";
    var position=document.getElementById('remove').value
    customerInfoArray.splice(position-1,1);
    dispalyAllCustomer();
}