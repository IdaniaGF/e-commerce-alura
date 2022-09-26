const search = document.querySelector("[data-search]"); 

search.addEventListener("submit", (event) => {
    event.preventDefault(); 
    //capturing input filter
    const inputFilter = document.querySelector("[data-filter]").value.toLowerCase(); 
    const input = {
        inputFilter
    };
    //sending to session  and redirecting screen
    sessionStorage.setItem("input",JSON.stringify(input)); 
    if(window.location.href.includes("administrator")){
        window.location.href="administrator.html"; 
    }else{
        window.location.href="screens/products.html"; 
    };
});

 

