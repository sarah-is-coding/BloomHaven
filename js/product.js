// js/product.js

// Function to fetch product data from JSON
export async function fetchProductData() {
    const response = await fetch('products.json');
    const products = await response.json();
    return products;
}

// Function to generate product HTML
export function generateProductHTML(product) {
    let ratingHtml = '';
    for (let i = 0; i < product.rating; i++) {
        ratingHtml += '<i class="fas fa-star"></i>';
    }

    return `
        <div class="pro">
            <a href="sproduct.html?id=${product.id}" class="product-content">
                <img src="${product.image}" alt="${product.name}">
                <div class="des">
                    <span>${product.brand}</span>
                    <h5>${product.name}</h5>
                    <div class="star">
                        ${ratingHtml}
                    </div>
                    <h4>${product.price}</h4>
                </div>
                <i class="fal fa-shopping-cart cart"></i>
            </a>
        </div>
    `;
}


