// js/displayProducts.js

import { generateProductHTML, fetchProductData } from './product.js';

export const productsPerPage = 8; // Number of products to display per page
export let currentPage = 1;
export let totalPages = 0;
export let allProducts = [];

export function displayProducts() {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = ''; // Clear existing products

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    
    const productsToDisplay = allProducts.slice(startIndex, endIndex);

    productsToDisplay.forEach(product => {
        const productHTML = generateProductHTML(product);
        productContainer.innerHTML += productHTML;
    });

    updatePaginationControls();
}

// Function to update pagination controls
function updatePaginationControls() {
    const pageNumbersContainer = document.getElementById('page-numbers');
    pageNumbersContainer.innerHTML = ''; // Clear existing page numbers

    // Generate page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('a');
        pageNumber.href = '#';
        pageNumber.innerText = i;
        if (i === currentPage) {
            pageNumber.classList.add('active');
        }
        pageNumber.addEventListener('click', function(event) {
            event.preventDefault();
            currentPage = i;
            displayProducts();
        });
        pageNumbersContainer.appendChild(pageNumber);
    }

    // Update Previous and Next buttons
    const prevPage = document.getElementById('prev-page');
    const nextPage = document.getElementById('next-page');

    prevPage.style.display = currentPage === 1 ? 'none' : 'inline';
    nextPage.style.display = currentPage === totalPages ? 'none' : 'inline';
}

// Function to handle pagination controls
export function setupPaginationControls() {
    document.getElementById('prev-page').addEventListener('click', function (event) {
        event.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayProducts();
        }
    });

    document.getElementById('next-page').addEventListener('click', function (event) {
        event.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            displayProducts();
        }
    });
}

// Function to initialize the product display and pagination
export async function init() {
    allProducts = await fetchProductData();
    totalPages = Math.ceil(allProducts.length / productsPerPage);
    displayProducts();
    setupPaginationControls();
}

// Load products and initialize pagination on page load
window.onload = init;
