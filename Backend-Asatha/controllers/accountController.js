// Requires and Imports

// account functions
const create_account = (request, response) =>{
    response.write('this is signup page');
    response.send();
}

const login_account = (request, response) =>{
    response.write('this is login page');
    response.send();
}

const forget_account = (request, response) =>{
    response.write('this is forget page');
    response.send();
}

module.exports ={
    create_account,
    login_account,
    forget_account,
}