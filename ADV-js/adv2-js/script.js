
// Que=1

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     login(){
//         return loggedin;
//     }
// }

// let user1=new User("Ashish","chandel078ashish@gmail.com");
// let user2=new User("Manish","chandel098manish@gmail.com");
// let user3=new User("Aakahsh","chandel08aakash@gmail.com");
// let user4=new User("Krish","chandel07krish@gmail.com");
// let user5=new User("Kanishak","chandel98kanishak@gmail.com");


// Que=2

// let Product={
//     name:"Addidas",
//     price:3000,
//     discount: 500,
//     finalprice: function(){
//         return this.price-this.discount;
//     }
// }
// console.log(Product.finalprice());


// Que=3

// class Car{
//     constructor(brand,speed){
//         this.brand=brand;
//         this.speed=speed;
//     }
//     drive(){
//         console.log(this.brand+ " "+this.speed)
//     }
// }
// let car1=new Car("BMW",200);
// let car2=new Car("Creta",180);


// Que=4

// class Student{
//     constructor(name,rollno){
//         this.name=name;
//         this.rollno=rollno;
//     }
//     print(){
//         console.log(this.name);
//         console.log(this.rollno);
//     }
// }
// let student1=new Student("Anshu",23098116780001);
// let student2=new Student("Ashish",23098116780002);
// let student3=new Student("Arshdeep",23098116780003);
// let student4=new Student("Aashu",23098116780004);
// student1.print();
// student2.print();
// student3.print();
// student4.print();


// Que=5

// let obj={
//     simple_fnc:function(){
//         console.log(this);              // it returns object because it gained from its parent
//     },

//     arrow_fnc:()=>{
//         console.log(this);              // it returns window
//     }
// }

// Que=6

    // function User(){         // Constructor without using class syntax
    //     this.name="HARSH";
    // }
    // let u1=new User();
    // console.log(u1);


// Que=7

// class User{
//     constructor(name){
//         this.name=name;
//         User.prototype.login=function(){
//             console.log("Successfully Login!!!");
//         }
//     }
// }
// let u1=new User("Ashish");


// class User2{
//     constructor(name){
//         this.name=name;
//     }
//     login(){
//         console.log("Successfully Login!!!");
//     }
// }
// let u2=new User("Manish");


// Que=8

// function User(val){
//     this.name=val;
//     this.loginin=function(){
//     console.log("Logged In");
// }
// }                                                          
// let user1=new User("Ashish");
// let user2=new User("Manish");                       // It returns false because har ek object ke pass alag alag fnction honge to unki is bhi different hogi




// function User2(val){
//     this.name=val;
// }
//  User.prototype.login=function(){
//     console.log("Logged In");
// }                                                          
// let user3=new User("Ashish");
// let user4=new User("Manish");                       // It returns true because ye shared functionuse kar rhe hai



// Que=9

// function printName(...arr){
//     console.log(this.name, ...arr);
// }
//   let obj={
//     name:"Ashish",
//   }
// console.log(printName.call(obj));
// console.log(printName.apply(obj,[1,2,3,4,5,6,7]));
// let newfnc=printName.bind(obj,[90,89,67,45]);
// console.log(newfnc());



//================================PART - [B]=================================

// SECTION - 1

// class Laptop{
//    constructor(brand,price){
//         this.brand=brand;
//         this.price=price;
//    } 
//     start(){
//         console.log("Laptop-Started !!");
//     }
//     increase(){
//         let inc_price=this.price+(this.price*10/100);
//         return inc_price;
//     }
// }
// let dell=new Laptop("DELL",50000);
// console.log(dell);
// let hp=new Laptop("HP",70000);
// console.log(hp);
// let asus=new Laptop("ASUS",90000);
// console.log(asus);


//SECTION - 2

// class Employee{
//     constructor(name,salary){
//         this.name=name;
//         this.salary=salary;
//     }
//     showDetails(){
//         console.log(this.name);
//         console.log(this.salary);
//     }
// }
// let emp=new Employee("Ashish",100000);
// let emp2=new Employee("Manish",120000);
// let emp3 = new Employee("Rahul",90000);
// emp.salary=900000;          //No, this does not effect other objects.
// emp.showDetails();
// emp2.showDetails();
// emp3.showDetails();


// SECTION - 3

// class BankAccount{
//     constructor(accountHolderName,balance){
//         this.accountHolderName=accountHolderName;
//         this.balance=balance;
//     }
//     Deposit(amount){
//         console.log("Before Deposit: "+this.balance);
//         console.log("After Deposit: "+this.balance+"+"+amount+"="+(this.balance+=amount));
//     }
// }
// let account=new BankAccount("Ashish",1000);
// let account2=new BankAccount("Manish",3000);
// let amt=+(prompt("Enter Deposit amount: "))
// account.Deposit(amt);

// console.log(account.balance);
// console.log(account2.balance);


// SECTION - 4

// let profile={
//     username: "the_ashish_chandel",
//     printName(){
//         console.log(this.username);
//     }
    
// }
// profile.printName();

// let fnc=profile.printName;
// fnc();

// let fn2 = profile.printName.bind(profile);
// fn2();


// SECTION - 5

// function Vehicle(type,wheels){
//     this.type=type;
//     this.wheels=wheels;
// }
//     Vehicle.prototype.describe=function(){
//         console.log(this.type);
//         console.log(this.wheels);
//     }
// let v1=new Vehicle("Bike",2);
// let v2=new Vehicle("Car",4);
// let v3=new Vehicle("Truck",18);
// v1.describe();
// v2.describe();
// v3.describe();



// function Vehicle2(type,wheels){
//     this.type=type;
//     this.wheels=wheels;
//     this.describe=function(){
//         console.log(this.type);
//         console.log(this.wheels);
//     }
// }

// let v11=new Vehicle("Bike",2);
// let v12=new Vehicle("Car",4);
// let v13=new Vehicle("Truck",18);


// SECTION - 6

obj={
    brand:"Addidas"
}
obj2={
    brand:"Nike"
}
function showBrand(){
    console.log(this.brand);
}
showBrand.call(obj);
showBrand.call(obj2);

