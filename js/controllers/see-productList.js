import { productServices } from "../services/product-services.js";
import { createProductHTML } from "create-product.js";

productServices
.productList()
.then(products => {
    productServices.orderProducts(products); 
    products.forEach(({imageUrl, alt, name, price, type, description, id}) => {
        createProductHTML(imageUrl, alt, name, price, type, description, id);
    }); 
})
.catch(err => {
    console.log(err);
    window.location.href="error.html"; 
})
 