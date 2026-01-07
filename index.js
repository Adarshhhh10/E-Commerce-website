const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 12000,
    image: "https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg"
  },
  {
    id: 2,
    name: "Laptop",
    price: 45000,
    image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 2500,
    image: "https://conekt.in/wp-content/uploads/2023/12/Conekt-SW1-Pro-Smart-Watch-Black.jpg"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 1500,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSInAPDeOA4f4r5M-TnC9noCpDTXSsGzGeX0zOph5n6e7_7OVLgHtxMl2yoh5CeFdk6IoQMr7zUSPluIQvJdXGARARKO5q7Xar4HAamMH86YryVYWng4_IH"
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    price: 1800,
    image: "https://image01-in.oneplus.net/media/202408/16/bfcb7c7145863efdb7efb80d264a5232.png?x-amz-process=image/format,webp/quality,Q_80"
  }
];

let totalItems = 0;
let totalPrice = 0;

function addToCart(product) {
  totalItems += 1;
  totalPrice += product.price;

  document.getElementById("item-count").textContent = totalItems;
  document.getElementById("total-price").textContent = totalPrice;
}

function checkout() {
  alert(`Thank you for your purchase!\nTotal Items: ${totalItems}\nTotal Price: ₹${totalPrice}`);
}

function loadProducts() {
  const productContainer = document.getElementById("products");

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
    `;
    productContainer.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", loadProducts);

