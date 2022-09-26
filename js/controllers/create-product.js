import { deleteProduct } from "./delete-product.js";

export function createProductHTML (imageUrl, alt, name, price, type, description, id) {
    //creating HTML elements
    const product = document.createElement("div");
    const content = 
    `<div class="product__img">
        <a href="edit-product.html?id=${id}" class="product__img__edit"><i class="fa-solid fa-pen"></i></a>
        <button type="button" class="product__img__delete"><i class="fa-solid fa-trash" data-id="${id}"></i></button>
        <img src="${imageUrl}" class="product__img__photo" alt="${alt}"/>
    </div>
    <div class="product__info">
        <h3 class="product__info__name">${name}</h3>
        <p class="product__info__price">${price}</p>
        <a class="product__info__button link">See product</a>
        <p class="product__info__description">${description}</p>
    </div>`; 
    const productsContainer = document.querySelector(`[data-${type}]`);
    
    product.classList.add("product");
    product.innerHTML=content; 
    productsContainer.appendChild(product); 
    
    const productDetailBtn = product.querySelector(".product__info__button"); 
    if (window.location.href.includes("products")){
        productDetailBtn.href=`product-detail.html?id=${id}`; 
    }else{
        productDetailBtn.href=`screens/product-detail.html?id=${id}`; 
    }

    //delete functionality 
    const deleteBtn = product.querySelector("button"); 
    deleteBtn.addEventListener("click", deleteProduct); 
};