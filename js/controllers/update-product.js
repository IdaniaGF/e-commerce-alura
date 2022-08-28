import { productServices } from "../services/product-services.js";
import { getId } from "../services/get-id.js";

const id = getId(); 
const image = document.querySelector('[data-type="productImg"]');
const form = document.querySelector('[data-form]'); 

const getData = (id) => {
    productServices.productDetails(id)
    .then(product => {
        document.querySelector(".product__img__photo").src = `${product.imageUrl}`; 
    
        if (id == null){
            window.location.href="../../screens/error.html"; 
        } else{
            const imageUrl = document.querySelector('[data-type="productImg"]'); 
            const type = document.querySelector('[data-type="productType"]'); 
            const name = document.querySelector('[data-type="productName"]'); 
            const price = document.querySelector('[data-type="productPrice"]'); 
            const description = document.querySelector('[data-type="productDescription"]'); 
                    
            imageUrl.value = product.imageUrl; 
            type.value = product.type; 
            name.value = product.name; 
            price.value = product.price; 
            description.value = product.description; 
        };       
    })
    .catch(err => {
        console.log(err);
        window.location.href="../../screens/error.html"; 
    }); 
}; 

getData(id); 

//preview image
image.addEventListener("blur", ()=>{
    let photo = document.querySelector(".product__img__photo"); 
    photo.classList.add("fade-out"); 
    setTimeout(() => {
        photo.src = `${image.value}`;
        photo.classList.remove("fade-out"); 
    },1000)
}); 

form.addEventListener("submit", (event)=>{
    event.preventDefault(); 
    const imageUrl = form.querySelector('[data-type="productImg"]').value;
    const type = form.querySelector('[data-type="productType"]').value; 
    const name = form.querySelector('[data-type="productName"]').value; 
    const price = form.querySelector('[data-type="productPrice"]').value; 
    const description = form.querySelector('[data-type="productDescription"]').value; 
    const alt = name; 

    productServices.updateProduct(imageUrl, alt, name, price, type, description, id)
    .then(() => form.submit()) 
    .catch(err => {
        console.log(err); 
        window.location.href="../../screens/error.html";
    }); 
}); 