import { fetchProductData } from './product.js';

function getProductById(products, id) {
    return products.find(product => product.id === id);
}

function displayProductDetails(product) {
    document.getElementById('MainImg').src = product.image;
    document.getElementById('breadcrumb').innerText = `Home / ${product.name}`;
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('product-description').innerText = product.description;

    const smallImgGroup = document.getElementById('small-img-group');
    smallImgGroup.innerHTML = `
        <div class="small-img-col">
            <img src="${product.image}" width="100%" class="small-img" alt="">
        </div>
        <!-- Add more images if needed -->
    `;

    // Add image click functionality
    const MainImg = document.getElementById("MainImg");
    const smallimg = document.getElementsByClassName("small-img");
    for (let i = 0; i < smallimg.length; i++) {
        smallimg[i].onclick = function() {
            MainImg.src = smallimg[i].src;
        }
    }
}

async function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (!productId) {
        console.error('Product ID not found in URL');
        return;
    }

    const products = await fetchProductData();
    const product = getProductById(products, productId);
    if (product) {
        displayProductDetails(product);
    } else {
        console.error('Product not found');
    }
}

window.onload = init;
