const products = [

{
name:"Laptop",
category:"Electronics",
price:65000,
image:"images/laptop.jpg"
},

{
name:"Phone",
category:"Electronics",
price:35000,
image:"images/phone.webp"
},

{
name:"Watch",
category:"Fashion",
price:2500,
image:"images/watch.webp"
},

{
name:"Shoes",
category:"Fashion",
price:3000,
image:"images/shoes.jpg"
},
{
name:"Headphones",
category:"Electronics",
price:1800,
image:"images/headphones.webp"
},

{
name:"Camera",
category:"Electronics",
price:42000,
image:"images/camera.webp"
},

{
name:"T-Shirt",
category:"Fashion",
price:899,
image:"images/t-shirt.jpg"
},

{
name:"Backpack",
category:"Fashion",
price:1500,
image:"images/backpack.webp"
}

];

let cart = 0;

const productContainer = document.getElementById("products");

function displayProducts(items){

productContainer.innerHTML="";

items.forEach(product=>{

productContainer.innerHTML += `
<div class="card">

<span class="offer">20% OFF</span>

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p class="category">${product.category}</p>

<div class="rating">
⭐⭐⭐⭐☆
</div>

<p class="desc">
Premium quality product with excellent performance.
</p>

<h2>₹${product.price}</h2>

<p class="delivery">
🚚 Free Delivery
</p>

<button onclick="addCart()">
🛒 Add to Cart
</button>

</div>
`;

});

}

displayProducts(products);

function addCart(){

cart++;

document.getElementById("count").innerText=cart;

}

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let filtered=products.filter(product=>

product.name.toLowerCase().includes(value)

);

displayProducts(filtered);

});

document.getElementById("category").addEventListener("change",function(){

let value=this.value;

if(value==="all"){

displayProducts(products);

return;

}

let filtered=products.filter(product=>

product.category===value

);

displayProducts(filtered);

});

document.getElementById("sort").addEventListener("change",function(){

let value=this.value;

let sorted=[...products];

if(value==="low"){

sorted.sort((a,b)=>a.price-b.price);

}

else if(value==="high"){

sorted.sort((a,b)=>b.price-a.price);

}

displayProducts(sorted);

});

document.getElementById("checkoutBtn").onclick=function(){

document.getElementById("popup").style.display="flex";

}

function placeOrder(){

alert("Order Placed Successfully!");

document.getElementById("popup").style.display="none";

cart=0;

document.getElementById("count").innerText=0;

}