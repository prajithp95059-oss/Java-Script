let ApiKey = 'https://fakestoreapi.com/products';

let allProduct = [];


let api = document.querySelector(".api");
api.innerHTML = "<h2>Loading...</h2>";

fetch(ApiKey)
.then(function(Data){
    return Data.json();
})
.then(function(jsData){

    allProduct = jsData;
    console.log(allProduct)

    displayProducts(allProduct);

})
.catch(function(){
    api.innerHTML = "<h2 style='color:red;'>Error loading data</h2>";
});

function displayProducts(data){

    api.innerHTML = ""; 

    data.forEach(function(c){

        let Apichild = document.createElement("div");

        Apichild.innerHTML = `
            <h3>${c.title.slice(0,20)}...</h3>
            <img src="${c.image}">
            <p>${c.description.slice(0,60)}...</p>
            <button>₹ ${c.price}</button>
            <br>
            <button onclick="viewMore(${c.id})">View More</button>
        `;

        api.appendChild(Apichild);
    });
}


function sort_low_to_high(){

    let sorted = allProduct.slice(); 

    sorted.sort(function(a,b){
        return a.price - b.price;
    });

    displayProducts(sorted);
}


function sort_high_to_low(){

    let sorted = allProduct.slice();

    sorted.sort(function(a,b){
        return b.price - a.price;
    });

    displayProducts(sorted);
}

function filterCategory(value){

    if(value === "all"){
        displayProducts(allProduct);
    } 
    else{

        let filtered = allProduct.filter(function(c){
            return c.category === value;
        });

        displayProducts(filtered);
    }
}

let searchInput = document.querySelector(".search");

searchInput.addEventListener("keyup", function(){

    let value = searchInput.value.toLowerCase();

    let filtered = allProduct.filter(function(c){
        return c.title.toLowerCase().includes(value);
    });

    if(filtered.length === 0){
        api.innerHTML = "<h2>No matches found</h2>";
    }
    else{
        displayProducts(filtered);
    }
});
function viewMore(id){

    let product = allProduct.find(function(p){
        return p.id == id;
    });

    alert(
        "Title: " + product.title + "\n\n" +
        "Price: ₹ " + product.price + "\n\n" +
        "Description: " + product.description
    );
}