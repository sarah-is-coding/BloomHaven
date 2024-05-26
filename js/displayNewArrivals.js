// displayNewArrivals.js

import { fetchProductData, generateProductHTML } from './product.js';

export let allProducts = [];

export async function displayNewArrivals() {
    const products = await fetchProductData();
    const productContainer = document.getElementById('new-arrivals');

    // Display only the first 8 products (or any other number you want)
    const productsToDisplay = products.slice(8, 16);

    productsToDisplay.forEach(product => {
        const productHTML = generateProductHTML(product);
        productContainer.innerHTML += productHTML;
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    allProducts = await fetchProductData();
    displayNewArrivals();
});