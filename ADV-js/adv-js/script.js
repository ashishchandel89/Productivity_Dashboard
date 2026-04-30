// class BiscutMaker{
//     constructor(name,price,weight){
//         this.name=name;
//         this.price=price;
//         this.weight=weight;
//         console.log(this.name);
//         console.log(this.price);
//         console.log(this.weight);
//     }
//          isReady(){
//              if(isNaN(this.weight)){
//             console.log("Please enter only number in weight");
//         }
//         else if(this.weight >= 20){
//             console.log("YES, it is ready to sell");
//         }
//         else{
//             console.log("NO, it doesn't ready to sell");
//         }
//     }
// }
// let name=prompt("Enter Biscut company name: ");
// let price=+(prompt("Enter the price of biscut packet: "));
// let weight=+(prompt("Enter the weight of packet"));
// let obj=new BiscutMaker(name,price,weight);
// obj.isReady();



// class Bike{
//     constructor(){
//         this.name='KTM';
//         this.price=200000;
//     }  
//     speed(){
//         console.log("Speed: 120");
//     }
//     model(){
//         console.log("Model: 2026");
//     }
// }
// let bike=new Bike();
// let bike2=new Bike();
// let bike3=new Bike();


// APPLY


// let a={
//     name:"Ashish",
// }
// function speed(...arr){
//     console.log(this);
//     console.log(...arr);
// }
// speed.apply(a,[1,2,3,4,8,3,4,1,6,9,4,5,3,2,1,8]);


// BIND


// let obj1={
//     name:"ashish",
//     rollno:23098116780002,
//     subject:"flat"
// }
// function speed(...arr){
//     console.log(this,...arr);
// }
// let newfnc=speed.bind(obj1,[9,0,6,4,3,22,2]);
// newfnc();

let obj={
    name:"Ashish Chandel",
     show(){
        console.log(this.name);
    }
}
obj.show();