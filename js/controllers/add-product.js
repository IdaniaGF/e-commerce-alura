import { productServices } from "../services/product-services.js";

const form = document.querySelector("[data-form]"); 

form.addEventListener("submit", (event)=>{
    event.preventDefault(); 

    //capture inputs value
    const imageUrl = form.querySelector('[data-type="productImg"]').value; 
    const type = form.querySelector('[data-type="productType"]').value; 
    const name = form.querySelector('[data-type="productName"]').value; 
    const price = form.querySelector('[data-type="productPrice"]').value; 
    const description = form.querySelector('[data-type="productDescription"]').value; 
    const alt = name; 

    //send data to database
    productServices
    .addProduct(imageUrl, alt, name, price, type, description)
    .then(() => form.submit())
    .catch(err => {
        console.log(err);
        window.location.href="../../screens/error.html";
    }); 
})