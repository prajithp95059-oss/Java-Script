//Task 1: E-Commerce Discount System
// function ecommerce(product_name,price){
//     let discount;
//     let finalPrice;
//     if(price>1000){
//        discount=price*20/100;
//     }else{
//         discount=price*10/100;
//     }
//     finalPrice = price - discount;
    
//     console.log("Product :",product_name);
//     console.log("Final Price :",finalPrice);
//     return finalPrice;
// }
// ecommerce("Shoes",2000);


// Task 2: Order Processing using Callback

// function placeOrder(callback){
//     console.log("Order Placed");
//     callback(500);
// }

// function payment(amount, callback){
//     console.log("Payment of " + amount + " successful");
//     callback();
// }

// function orderSuccess(){
//     console.log("Order delivered");
// }

// placeOrder(function(amount){
//     payment(amount, function(){
//         orderSuccess();
//     });
// });


//Task 3: Employee Data Loop System

// function EmployeeData() {
//     let details = [
//         { name: "Prajith", salary: 50000 },
//         { name: "john", salary: 70000 }
//     ];

//     for (let emp of details) {
//         if (emp.salary > 60000) {
//             console.log(emp.name + " : High Salary");
//         } else {
//             console.log(emp.name + " : Normal Salary");
//         }
//     }
// }

// EmployeeData();

// Task 4: Login Attempts (While Loop)


// let attempts = 1;
// let maxattempts = 3;
// let correctPassword = 1000;
// while(attempts <= maxattempts){
//     let pass = Number(prompt("Enter Password:"));
//     if(pass == correctPassword){
//         console.log("Login sucess");
//         break;
//     }else{
//         console.log("Attempt"+ attempts);
//     }
//     attempts++;
// }


//Task 5: Coupon Generator (Generator Function)
// function* gen() {
//     yield "10% OFF";
//     yield "20% OFF";
//     yield "Free Delivery";
//     yield "Cashback";
// }

// let allval = gen();
// console.log(allval.next().value); 
// console.log(allval.next().value); 
// console.log(allval.next().value); 
// console.log(allval.next().value); 

//Task 6: Shopping Cart Total (for...of)
// let cart = [100, 200, 300, 400];
// let total = 0;
// for (let price of cart) {
//     total += price;
// }
// console.log("Total Bill:", total);


//Task 7: User Profile System (for...in)

// let user={
//     name:"Prajith",
//     role:"Developer",
//     location:"India"
// }
// for (let a in user){
//     console.log(a +":"+user[a] );
// }

//Task 8: Factory Pattern (Function Reuse);

// function createPhone(){
//     return "Phone";}
//     function createBattery(){
//         return "Battery"
//     }
//     function createCharger(){
//         return "Charger"
//     }
// let order =createPhone() + " + " + createBattery() + " + "  + createCharger();
// console.log("Your Order :",order);

//Task 9: College Form with Default Value

// function students( name ,reg_no ,percentage, department="Not Assigned"){
//     console.log("student name = ",name);
//     console.log("Register no = ",reg_no);
//     console.log("Percentage = ",percentage);
//     console.log("Department = ",department);
// }
// students("prajith",1001,73 +"%","Cse");
// students("rajesh",1002,93 +"%","Ece");
// students("jerlin",1003,79 +"%");

// Task 10: Currying - EMI Calculator

// function EMI(principal){
//     return function(rate){
//         return function(time){
//             return(principal*rate*time)/100;
//         };
//     }; 
// }
// Total_EMI = EMI(10000)(2)(12);
// console.log("Total_EMI :",Total_EMI);

//  Task 11: Even/Odd Analyzer

// for(let a=1; a<=10;a++){
//     if(a%2==0){
//         console.log(a," -> EVEN");
//     }else{
//         console.log(a,"-> ODD");
//     }
// }

//🔹 Task 12: Function Scope Debugging

// if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// console.log(a); // It print the output because it is an globalscope we can access every where.
// console.log(b); // we cant able to print outside the block because it is an block-Scope.
// console.log(c); //we cant able to print outside the block because it is an block-Scope.

//🔹 Task 13: Real-Time Alert System (IIFE)

// (function(product, discount) {
//     alert(` Flash Sale: ${discount} OFF on ${product}`);
// })("Shirts", "50%");

//🔹 Task 14: Marks Calculator with Return

// function marks(m1, m2, m3) {
//     let total = m1 + m2 + m3;
//     let average = total / 3;

//     console.log("Total:", total);
//     console.log("Average:", average);
// }

// marks(80, 90, 70);

//🔹 Task 15: Retry Offer System (Generator + Condition)
function * gen(){
    yield "10% Flat off ";
    yield "50% Flat off ";
    yield "Try again";
    yield"Cashback 50rs"
}
let allval=gen();
console.log(allval.next().value);
console.log(allval.next().value);
console.log(allval.next().value);
console.log(allval.next().value);
