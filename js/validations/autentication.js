import { displayError } from "./validations.js";

const form = document.querySelector('[data-form]'); 
const username = form.querySelector('[data-type="email"]');
const password = form.querySelector('[data-type="password"]'); 
const userStatus = JSON.parse(localStorage.getItem("disable")) || {disable:false}; 
let attempt = 3; 

if(!userStatus.disable){
    form.addEventListener("submit", (event)=> {
        event.preventDefault(); 
        if(attempt > 0){
            autenticate(username,password);
        }else{
            userStatus.disable = true; 
            localStorage.setItem("disable",JSON.stringify(userStatus));
            disableUser();
            displayError("",username); 
            displayError("Login has been locked, contact the website administrator.",password); 
        }; 
    });
}else {
    disableUser();
    displayError("",username); 
    displayError("Login has been locked, contact the website administrator.",password); 
}

function autenticate(username,password){
    const usersList = () => fetch("https://e-commerce-fake-server.herokuapp.com/users").then(response => response.json());  
    usersList().then((data) =>{
        if(data.some(user => user.username == username.value)){
            const user = data.filter(user => user.username == username.value); 
            if(user.some( user => user.password== password.value)){
                form.submit(); 
            }else{
                displayError("",username); 
                displayError("Your account or password is incorrect. Login will be locked after three attemps. If you don't remember your password contact the website administrator.",password); 
                attempt--; 
            }; 
        }else{
            displayError("",username); 
            displayError("Your account or password is incorrect. Login will be locked after three attemps. If you don't remember your password contact the website administrator.",password); 
            attempt--; 
        };
    });
}

function disableUser (){
    username.disabled = userStatus .disable;
    password.disabled = userStatus.disable; 
    form.querySelector("button").disabled = userStatus.disable;
}

