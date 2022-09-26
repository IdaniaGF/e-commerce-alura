import { productServices } from "../services/product-services.js";
import { createProductHTML } from "create-product.js";

productServices
.productList()
.then(products => {
    //capturing session storage data
    const results = document.querySelector("[data-results]"); 
    const inputFilter = JSON.parse(sessionStorage.getItem("input")).inputFilter||""; 

    //displaying data in input
    document.querySelector("[data-filter]").value = inputFilter; 
    productServices.orderProducts(products); 

    //check for input
    if (inputFilter.length > 0){

        //filtering products
        let counter = 0; 
        products.forEach(({imageUrl, alt, name, price, type, description, id}) =>{
            if(name.toLowerCase().includes(inputFilter) || description.toLowerCase().includes(inputFilter) || type.toLowerCase().includes(inputFilter)){
                createProductHTML(imageUrl, alt, name, price, type, description, id); 
                counter++; 
            };
        });
        results.textContent=`${counter} results`;
    }else{
        //display all products
        results.textContent=`All products`;
        products.forEach(({imageUrl, alt, name, price, type, description, id}) => {
            createProductHTML(imageUrl, alt, name, price, type, description, id)
        }); 
    };
})
.catch(err => {
    console.log(err);
    window.location.href="error.html"; 
}); 
