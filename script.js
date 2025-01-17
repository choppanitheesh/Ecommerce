const container = document.querySelector(".container");

fetch("products.json")
  .then((response) => response.json())
  .then((products) => {
    for (const category in products) {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "category";

      const categoryTitle = document.createElement("h2");
      categoryTitle.textContent =
        category.charAt(0).toUpperCase() + category.slice(1);
      categoryDiv.appendChild(categoryTitle);

      const productsDiv = document.createElement("div");
      productsDiv.className = "products";

      products[category].forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="content">
            <h3>${product.name}</h3>
            <p>Brand: ${product.brand}</p>
            <p>Price: ${product.price}</p>
          </div>
        `;

        productsDiv.appendChild(productCard);
      });

      categoryDiv.appendChild(productsDiv);
      container.appendChild(categoryDiv);
    }
  })
  .catch((error) => console.error("Error fetching products:", error));
