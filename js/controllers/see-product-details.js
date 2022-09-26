import { productServices } from "../services/product-services.js";
import { createProductHTML } from "create-product.js";

const getId = () =>{
    const url = new URL(window.location); 
    const id = url.searchParams.get("id"); 
    return id; 
}

productServices.productDetails(getId()).then(product => {
    createProductHTML(product.imageUrl, product.alt, product.name, product.price, product.type, product.description, product.id); 
}
); 

