const productList = () => fetch("https://e-commerce-fake-server.herokuapp.com/product").then(response => response.json());  

const addProduct = (imageUrl, alt, name, price, type, description) =>{
    return fetch("https://e-commerce-fake-server.herokuapp.com/product", {
        method: "POST", 
        headers: {
            "Content-type": "application/json"
        }, 
        body: JSON.stringify({imageUrl, alt, name, price, type, description, id:uuid.v4()})
    }); 
};

const productDetails = (id) => fetch(`https://e-commerce-fake-server.herokuapp.com/product/${id}`).then(response => response.json()); 

const updateProduct = (imageUrl, alt, name, price, type, description, id) => {
    return fetch (`https://e-commerce-fake-server.herokuapp.com/product/${id}`,{
        method: "PUT", 
        headers: {
            "Content-type": "application/json"
        }, 
        body: JSON.stringify({imageUrl, alt, name, price, type, description})
    })
    .then(response => response)
    .catch((err) => {
        console.log(err);
        window.location.href="../../screens/error.html";
    });
};

const deleteProduct = (id) =>{
    return fetch (`https://e-commerce-fake-server.herokuapp.com/product/${id}`,{
        method: "DELETE", 
    }); 
};

const orderProducts = (products) => {
    return products.sort((firstProduct,secondProduct) => {
        if (firstProduct.name < secondProduct.name){
            return -1
        } if (firstProduct.name > secondProduct.name){
            return 1
        } else if (firstProduct.name == secondProduct.name){
            return 0
        }
    })
};

export const productServices = {
    productList,
    addProduct,
    productDetails, 
    updateProduct, 
    deleteProduct,
    orderProducts
};
