//Task 1: E-commerce Cart Total

// let cart = [
//   {name: "Shirt", price: 500, qty: 2},
//   {name: "Shoes", price: 1500, qty: 1},
//   {name: "Cap", price: 300, qty: 3}
// ];

// let Total_Price = cart.reduce((acc, c) => {
//   return acc + (c.price * c.qty);
// }, 0);

// console.log("Total Price :",Total_Price);

// let Max_Product = cart.filter((c,i,t) => {
//     return c.price>=1000;
// });
// console.log(Max_Product);

// let uppercase = cart.map((c,i,t) => {
//     return c.name.toUpperCase(); 
// })
// console.log(uppercase);


// Task 2: Student Result System

// let students = [
//   {name: "Arun", marks: 85},
//   {name: "Bala", marks: 45},
//   {name: "Charan", marks: 60},
//   {name: "Divya", marks: 30}
// ]
// let failed_student=students.filter((c,i,t) => {
//     return c.marks<=50;

// });
// console.log("failed_student :",failed_student);

// let hasDistinction= students.some((c,i,t) =>{
//     return c.marks > 80;
// });
// console.log("Did any student got distinction :",hasDistinction );

// let allpass = students.every((c,i,t) => {
//     return c.marks > 35; 
// });
// console.log("Did all Student Pass",allpass);

// let first_fail= students.find((c,i,t) => {
//     return c.marks<50;
// });
// console.log("The first student who failed :",first_fail);


// Task 3: Employee Salary Analysis

// let employees = [
//   {name: "A", salary: 25000},
//   {name: "B", salary: 40000},
//   {name: "C", salary: 15000},
//   {name: "D", salary: 50000}
// ]

// let increment = employees.map((c,i,t) => {
//     return c.salary + (c.salary*0.10)
// });
// console.log("Updated Salary",increment);

// let max_salary = employees.filter((c,i,t) => {
//     return c.salary>30000;
// });
// console.log("Employees getting more than 30000 :",max_salary);

// let Total_salary = employees.reduce((acc,c,i,t) => {
//     return acc + c.salary
// },0);
// console.log("Total Salary :",Total_salary);

// let highest_sal = employees.sort((a,b) => {
//     return b.salary - a.salary
// });
// console.log("sorted by salary :",highest_sal);


//Task 4: String Real Use Case (Search System)

// let products = ["Laptop", "Mobile", "Tablet", "Camera"]
// console.log(" Mobile exists :",products.includes("Mobile"));

// let lowercase = products.map((c,i,t) => {
//     return c.toLowerCase(); 
// })
// console.log("LOWER CASE :",lowercase);

// let Index_val=products.indexOf("Tablet");
// console.log("Index of Tablet :",Index_val);

// console.log("Array into String",products.join("-"));



//Task 5: Date Real-Time Task (Age Calculator)

// let DOB = new Date(prompt("Enter DOB 🎂!!(YYYY-MM-DD):"));
// let age = new Date().getFullYear() - DOB.getFullYear();
// alert(age);



// Task 6: Login Validation System


// let users = [
//   {username: "admin", password: "1234"},
//   {username: "user", password: "abcd"}
// ]
// let inputUsername = prompt("Enter the Username :");
// let inputPassword = prompt("Enter the Password :");

// let findthe_user =users.find((c,i,t)=>{
//     return c.username === inputUsername;
// });

// if (findthe_user && findthe_user.password === inputPassword){
//     console.log("Login Success!!!!");   
// }else{
//     console.log("Invalid Credentials");
    
// }

//Task 7: Even Number Analyzer

// let numbers = [10, 15, 20, 25, 30]

// let even=numbers.filter(c=>c%2==0);
// console.log(even);

// let hasOdd = numbers.some(c => c % 2 !== 0);
// console.log("Has Odd:",hasOdd);

// let all_even = numbers.every(c=>c%2==0);
// console.log("ALL EVEN : ",all_even);

// let firstGreater = numbers.find(c => c > 20);
// console.log("First Greater:",firstGreater);

//Bonus Challenge (🔥 Interview Level)

// let orders = [
//   {id: 1, amount: 500, status: "delivered"},
//   {id: 2, amount: 1500, status: "pending"},
//   {id: 3, amount: 2000, status: "delivered"}
// ]
// let Status = orders.filter((c)=>{
//     return c.status === "delivered";
// });
// let Total_Revenue=Status.reduce((acc,c) => {
//     return acc + c.amount
// },0);
// console.log("Total Revenue of Delivered :",Total_Revenue);

// let pending_orders = orders.filter((c)=>{
//     return c.status === "pending";
// });
// console.log("Pending Orders:",pending_orders);

// let greater_order=orders.some((c)=>{
//     return c.amount >1000 ;
// });
// console.log("Any order > 1000:", greater_order);

// let amount_sort = orders.sort((a,b)=>{
//     return a.amount - b.amount;
// });
// console.log("Sorted Orders ",amount_sort)


