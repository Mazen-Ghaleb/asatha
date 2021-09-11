// Requires and Imports

// cart functions
const view_cart = (request, response) =>{
    response.write('this is cart page');
    response.send();
}

module.exports ={
    view_cart,
}