class Employee{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    // constructor(name="Employee",age=undefined){
    //     this.name=name;
    //     this.age=age;
    // }

    display(){
        console.log("Name: "+this.name);
        console.log("Age: "+this.age);
        console.log("Salary: "+this.salary);
        console.log("Designation: "+this.designation)
    }

}

class Clerk extends Employee{

    constructor(name,age){
        super(name,age)
        this.salary=10000;
        this.designation="clerk";
    }
    
    raiseSalary(){
        this.salary +=2000;
    }
}

class Programmer extends Employee{

    constructor(name,age){
        super(name,age)
        this.salary=25000;
        this.designation="programmer";
    }

    raiseSalary(){
        this.salary +=5000;
    }
}

class Manager extends Employee{

    constructor(name,age){
        super(name,age)
        this.salary=80000;
        this.designation="manager";
    }

    raiseSalary(){
        this.salary +=10000;
    }
}

let c1=new Clerk("Ravi",22);
let p1=new Programmer("Prem",23);
let m1=new Manager("Ram",25);

console.log("=======================");
c1.display()
console.log("=======================");
p1.display()
console.log("=======================");
m1.display()

c1.raiseSalary()
p1.raiseSalary()
m1.raiseSalary()
console.log("============================AFTER APPRAISAL=======================")

c1.display()
console.log("=======================");
p1.display()
console.log("=======================");
m1.display()