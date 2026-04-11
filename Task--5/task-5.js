//Task 1: E-commerce Cart System

// let cart1 = [
//   { name: "Shirt", price: 500 },
//   { name: "Shoes", price: 1500 }
// ];

// let cart2 = [
//   { name: "Watch", price: 2000 }
// ];


// let mergedCart = [...cart1, ...cart2];
// console.log("Merged Cart:", mergedCart);

// mergedCart.push({ name: "Cap", price: 300 });
// console.log("After Adding Product:", mergedCart);

// mergedCart.pop();
// console.log("After Removing Last Product:", mergedCart);


// let totalPrice = 0;

// for (let item of mergedCart) {
//   totalPrice += item.price;
// }

// console.log("Total Price:", totalPrice);

 //Task 2: User Profile Management

//  let user = {
//   name: "Prajith",
//   role: "Trainee",
//   salary: 20000
// };

// let update = {
//   role: "Developer",
//   salary: 50000
// };


// let updatedUser = { ...user, ...update };


// let { name, role, salary } = updatedUser;

// console.log(name + " is now a " + role + " earning " + salary);


//Task 3: Function with Rest Operator (Team Score System)

// function teamScore(teamName, ...scores) {
//   console.log("Team:", teamName);
//   console.log("Scores:", scores);
//   let total = 0;
//   for (let score of scores) {
//     total += score;
//   }
//   console.log("Total Score:", total);
//   let highest = scores[0];
//   for (let score of scores) {
//     if (score > highest) {
//       highest = score;
//     }
//   }
//   console.log("Highest Score:", highest);
// }
// teamScore("Warriors", 40, 80, 90, 30);

// Task 4: Nested Data Extraction (API Response Simulation)

// let apiData = {
//   user: {
//     name: "Prajith",
//     address: {
//       city: "Kaniya kumari",
//       pincode: 629155
//     }
//   }
// };

// let name = apiData.user.name;
// let city = apiData.user.address.city;
// let pincode = apiData.user.address.pincode;

// console.log(name + " lives in " + city + " - " + pincode);


// Task 5: Array Dashboard (Admin Panel)

// let users = ["A", "B", "C", "D", "E"];

// users.splice(2, 2, "X", "Y");
// console.log("After splice:", users);
// let firstThree = users.slice(0, 3);
// console.log("First 3 users:", firstThree);
// let hasB = users.includes("B");
// console.log("B exists:", hasB);

// let indexE = users.indexOf("E");
// console.log("Index of E:", indexE);

// Task 6: Data Cleaning Tool

// let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"];
// let flatData = messyData.flat(Infinity);
// let cleanData = flatData.filter(item => item != null);

// console.log(cleanData);

//Task 7: Sorting Bug Fix (Real Industry Issue ⚠️)

// let prices = [1000, 200, 50, 5000];

// prices.sort(function(a, b) {
//   return a - b;
// });

// console.log(prices);

//Task 8: Analytics Report Generator

// let orders = [
//   {id:1, amount:100},
//   {id:2, amount:200},
//   {id:3, amount:300}
// ];
// let total = orders.reduce((sum, item) => sum + item.amount, 0);
// let average = total / orders.length;

// console.log("Total Revenue:", total);
// console.log("Average Order Value:", average);

// Task 9: Inventory System (Advanced)

// let inventory1 = ["Shirt", "Shoes", "Watch"];
// let inventory2 = ["Cap", "Belt"];

// inventory1.push("Socks");
// console.log("After Add:", inventory1);

// inventory1.pop();
// console.log("After Remove:", inventory1);

// let index = inventory1.indexOf("Shoes");
// if (index !== -1) {
//   inventory1.splice(index, 1, "Sneakers");
// }
// console.log("After Update:", inventory1);

// let hasWatch = inventory1.includes("Watch");
// console.log("Watch exists:", hasWatch);

// let finalInventory = [...inventory1, ...inventory2];
// console.log("Merged Inventory:", finalInventory);

//Task 10: Interview Level Challenge

// function processData(...data) {

//   let flat = data.flat(Infinity);       

//   let unique = [...new Set(flat)];       

//   unique.sort((a, b) => a - b);         

//   return unique;
// }

// console.log(processData(1, 2, [3, 4], [5, [6]]));