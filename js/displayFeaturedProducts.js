// displayFeaturedProducts.js

import { fetchProductData, generateProductHTML } from './product.js';

export let allProducts = [];

export async function displayFeaturedProducts() {
    console.log('Fetching featured products...');
    const products = await fetchProductData();
    console.log('Fetched products:', products);

    const productContainer = document.getElementById('featured-products');

    // Display only the first 8 products (or any other number you want)
    const productsToDisplay = products.slice(0, 8);
    console.log('Products to display (first 8):', productsToDisplay);

    productsToDisplay.forEach(product => {
        const productHTML = generateProductHTML(product);
        productContainer.innerHTML += productHTML;
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    allProducts = await fetchProductData();
    displayFeaturedProducts();
});