export function validate(input){
    const inputType = input.dataset.type;

    if(input.validity.valid){
        removeError(input)
    }else{
        displayError(selectErrorMessage(inputType,input),input)
    }
}

const errorTypes = [
    "valueMissing", 
    "patternMismatch", 
];

const errorMessages = {
    name: {
        valueMissing: "This field can not be blank",
    },
    email: {
        valueMissing: "This field can not be blank",
        patternMismatch: "Please enter a valid email", 
    },
    message: {
        valueMissing: "This field can not be blank", 
    },
    password: {
        valueMissing: "Please enter the password", 
    }, 
    productImg: {
        valueMissing: "This field can not be blank",
        patternMismatch: "Please, enter a valid URL", 
    }, 
    productType: {
        valueMissing: "This field can not be blank",
    }, 
    productName: {
        valueMissing: "This field can not be blank",
    }, 
    productPrice: {
        valueMissing: "This field can not be blank",
        patternMismatch: "Please, follow the requested format", 
    }, 
    productDescription: {
        valueMissing: "This field can not be blank",
    },
};

function selectErrorMessage(inputType, input){
    let message = ""
    errorTypes.forEach(error => {
        if (input.validity[error]){
            message = errorMessages[inputType][error]; 
        };
    }); 
    return message; 
}; 

export function displayError (message,input){
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".error").innerHTML = message; 
}

export function removeError(input){
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".error").innerHTML = "";
}