//Task 1: Order System (setTimeout)


// console.log("Order placed");
// setTimeout(()=>{
//     console.log("Preparing Food");

// },2000);
// setTimeout(()=>{
//     console.log("Food Ready")
// },4000);
// setTimeout(()=>{
//     console.log("Delivered")
// },5000);


// Task 2: Digital Clock (setInterval)

// let clock=setInterval(()=>{
//     let now = new Date();
//     console.log(now.toLocaleTimeString());
    
// },1000);
// setTimeout(()=>{
//     clearInterval(clock);
//     console.log("clock stopped");
// },10000);


//⚔️ LEVEL 2 — Intermediate (Callbacks + Async Thinking)

// function loginUser(login, callback){
//     setTimeout(() => {
//         console.log("User logged In", login);
//         callback({ userId: 1, username: login });
//     }, 1000);  
// }

// function getUserData(userId, callback){
//     setTimeout(() => {
//         console.log("User Data Fetched");
//         callback({ userId: userId, name: "Prajith" });
//     }, 2000);
// }

// function getUserPosts(userId, callback){
//     setTimeout(() => {
//         console.log("User Posts Fetched");
//         callback(["Post-1", "Post-2"]);
//     }, 3000);
// }

// let username = prompt("Enter your username:");

// loginUser(username, (user) => {
//     getUserData(user.userId, (data) => {
//         getUserPosts(data.userId, (posts) => {
//             console.log(posts);
//         });
//     });
// });

//LEVEL 3 — Promises (Real API Logic)
// Task 4: Fake API Promise
function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
           if (true) {
                resolve(["Laptop", "Mobile", "Headphones"]);
            } else {
                reject("API Failed");
            }
        }, 2000);
    });
}
getProducts()
    .then((products) => {
        console.log("Products:", products);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Request Completed");
    });


