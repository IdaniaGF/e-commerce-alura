import { productServices } from "../services/product-services.js";

export function deleteProduct (event){
    //capturing id element
    const id = event.target.getAttribute("data-id");
    //displaying security question 
    const securityQuestion = document.querySelector(".popup");
    securityQuestion.classList.remove("hide-element");
    //capturing and adding functionality to buttons
    const btnConfirm = securityQuestion.querySelector("#delete"); 
    const btnCancel = securityQuestion.querySelector("#dontDelete"); 

    btnConfirm.addEventListener("click", async () => {
        try{
            const deleted = await productServices.deleteProduct(id); 
            if(deleted){
                securityQuestion.classList.add("hide-element"); 
                window.location.reload(); 
            }
        }catch(err){
            console.log(err);
            window.location.href="error.html"; 
        }
    }); 
    //hide security question
    btnCancel.addEventListener("click", () => {
        securityQuestion.classList.add("hide-element"); 
    })    
}