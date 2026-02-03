// // fetch("https://dummyjson.com/products")
// // .then(res=> res.json())
// // .then(data => {
// //     const products = data.products;
// //     console.log("data", data);
// //    // renderProducts(products);
// //     products.forEach(product=>{
// //         console.log(product.title);

// //         products.forEach(product=>{
// //             console.log(product.title);
// //             console.log(product.img);
// //              console.log(product.thumbnail);


// //             const card = document.createElement("div");
// //              card.className = "product-card";
// //             const title = document.createElement("h2");
// //             const image = document.createElement("img");
// //            image.src = product.thumbnail;
// //             title.h3 = product-title;
            
// //         })
// //     });
// // })
// // .catch(error => {
// //     console.log("Error: ",error);
// // })

// let allProducts = [];

// fetch("https://dummyjson.com/products")
//   .then(res => res.json())
//   .then(data => {
//       renderProducts(data.products);
//   })
//   .catch(error => {
//       console.log("Error:", error);
//   });

// function renderProducts(products) {
//     const container = document.getElementById("product-container");

//     products.forEach(product => {
//         // create elements
//         const card = document.createElement("div");
//         card.className = "product-card";

//         const title = document.createElement("h3");
//         title.textContent = product.title;

//         const image = document.createElement("img");
//         image.src = product.thumbnail;
//         image.alt = product.title;
//        const desc = document.createElement("p");
//        desc.textContent = product.description;
//         // append
//         card.appendChild(desc);
//         card.appendChild(image);
//         card.appendChild(title);
//         container.appendChild(card);
//     });
// }
let allProducts = [];
const container = document.getElementById("product-container");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("btn");

// FETCH DATA
fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    allProducts = data.products;
    renderProducts(allProducts);
  })
  .catch(error => console.log("Error:", error));

// RENDER FUNCTION
function renderProducts(products) {
  container.innerHTML = ""; // clear old products

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    const title = document.createElement("h3");
    title.textContent = product.title;
    const desc = document.createElement("p");
desc.className = "product-desc";
desc.textContent = product.description;


    const img = document.createElement("img");
    img.src = product.thumbnail;
const price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;
        price.style.fontWeight = "bold";
    card.appendChild(img);
    card.appendChild(title);
    container.appendChild(card);
    card.appendChild(desc);
    card.appendChild(price);
  });
}
// SEARCH BUTTON CLICK
// searchBtn.addEventListener("click", () => {
//   const searchValue = searchInput.value.toLowerCase();

//   const filteredProducts = allProducts.filter(product =>
//     product.title.toLowerCase().includes(searchValue)
//   );

//   renderProducts(filteredProducts);
// });
searchBtn.addEventListener("click", () => {
    const searchValue = searchInput.value.trim(); // get input value
    if (searchValue) {
        // Redirect to search.html with query in URL
        window.location.href = `search.html?q=${encodeURIComponent(searchValue)}`;
    }
});
fetch("https://dummyjson.com/products")
.then((res)=>res.sen.json())
.then((data)=>{
    const products = data.products
})