// Requires and Imports

// product functions
const view_product = (request, response) =>{
    response.write('this is product page');
    response.send();
}

module.exports ={
    view_product,
}