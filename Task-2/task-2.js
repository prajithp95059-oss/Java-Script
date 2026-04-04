//Section 1: Printing & User Interaction


//1
 let name = "Prajith P";
 let Designation = "Frontend-Developer";
 console.log("name:",name);// print name
 console.log("Designation:",Designation); // print Designation

 //2
 let b = "Welcome to JavaScript Session";
 alert(b); //shows alert 

 //3
 let userwish = confirm("Do you like coding");
 console.log(userwish); //confirm

 //4
let food = prompt("What is your favorite food?");
console.log("Your favorite food is:", food); //get user input

//5
let c = "Good Morning Team";
document.writeln(c);// directv print in the webpage

//Section 2: Console Methods

//6
let num = 6;
console.log("The number is:",num); //6

//7 
let warn = "This is a warning";
console.warn(warn); // show warning sign in console

//8
let err = "Something went wrong";
console.error(err);// show error in the console

//9
console.clear() // clear all the data in console

 //Section 3: Data Types

//10

let myname="Prajith";
console.log(typeof(myname)) //string

//11
let age = 22;
console.log(typeof(age)); // number

//12
let h = true;
console.log(h); //true

//13
let myVar;
console.log(myVar); //undefined

//14
let emptyValue = null;
console.log(emptyValue);// null

//Section 4: Arrays

//15
let fruits=['mango','grapes','orange','apple','banana'];
console.log(fruits) //['mango','grapes','orange','apple','banana']

//16
console.log(fruits[0],fruits[4]) //['mango','banana']

//17 push
fruits.push("pineapple");
console.log(fruits);//['mango','grapes','orange','apple','banana','pineapple']

//18 pop
fruits.pop();
console.log(fruits);// ['mango','grapes','orange','apple','banana']

//19
console.log("The length of the array is:",fruits.length); //4

// Section 5: Objects

//20
let student = {
    name: "prajith",
    age: 22,
    course: "CSE",
    
};

console.log(student); // name: "prajith",age: 22,course: "CSE"

//21
console.log("The name of the student is:",student.name); //prajith

//22
student.college="hindusthan";
console.log(student);  //name: "prajith",age: 22,course: "CSE",college:'hindusthan'

//23
student.games=["kabadi","cricket","volleyball"]
console.log(student.games)
console.log(student.games[0]);//kabadi

//24
student.age=23;
console.log(student); // update the age 22 to 23

//Section 6: Operators

//25  addition
let num1=21;
let num2=22;
let num3=num1+num2
console.log(num3); // 43

//26  subtraction
let n1=100;
let n2=40;
let n3=n1-n2;
console.log(n3);//60

//27 multiplication 
let m1=100;
let m2=40;
let m3=m1*m2;
console.log(m3);//4000

//28 division
let d1=10;
let d2=2;
let d3=d1/d2;
console.log(d3);//5

//29 modulus
let s1=100;
let s2=55;
let s3=s1%s2;
console.log(s3);//45

//30 exponent
let e1=2;
let e2=3;
let e3=e1**e2;
console.log(e3);//8

//31
let pos=5;
console.log(pos++);//5 use the value
console.log(pos); //6 then increase

//32
let pre=5;
console.log(++pre); // 6 increase first 
console.log(pre);//6 then use

//33
//num++ → use first, then increase
//++num → increase first, then use

//34
//post decrement
let num4=45;
console.log(num4--);//45
console.log(num4); //44
//pre decrement
console.log(--num4);//44

//35
// Use value first, then increment
let a = 5;        // a starts with 5

// Increment first, then use value

let b = a++;      // post-increment → assign first, then increase
                  // b = 5, then a becomes 6

let c1 = ++a;      // pre-increment → increase first, then assign
                  // a becomes 7, then c1 = 7

console.log(a);   // 7
console.log(b);   // 5
console.log(c1);   // 7

//Section 8: Real-Time Logic Tasks

//36
let userAge = prompt("Enter Your Age:");

if (userAge >= 18) {
   console.log("You can vote");
} else {
  console.log("You can't vote");
}

//37
let userName=prompt("What is your name?");
console.log("Hello ",userName);

//38
let Marks=[85,66,78,45,94,39];
let max = Math.max(...Marks);
console.log("The highest mark is:",max);

//39
let fruit = {
    yellow: ["mango", "banana"],
    red: ["strawberry", "apple"],
};

console.log(fruit.yellow)  ;
console.log(fruit.red)   ;

//40
let fruit1 = prompt("Enter first favorite fruit:");
let fruit2 = prompt("Enter second favorite fruit:");
let fruit3 = prompt("Enter third favorite fruit:");

let favfruits = [fruit1, fruit2, fruit3];
console.log("My favorite fruits are:"+favfruits);
console.log(favfruits);





