// Requires and Imports

// home functions
const view_home = (request, response) =>{
    response.write('this is home page');
    response.send();
}

module.exports ={
    view_home,
}