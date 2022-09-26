const search = document.querySelector("[data-search]"); 

search.addEventListener("submit", (event) => {
    event.preventDefault(); 
    //capturing input filter
    const inputFilter = document.querySelector("[data-filter]").value.toLowerCase(); 
    //sending to session  and redirecting screen
    sessionStorage.setItem("input",inputFilter); 
    if(window.location.href.includes("administrator")){
        window.location.href="administrator.html"; 
    }else if(window.location.href.includes("products")){
        window.location.href="products.html"; 
    }else{
        window.location.href="screens/products.html"; 
    };
});