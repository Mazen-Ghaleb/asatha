// Requires and Imports

// home functions
const view_home = (request, response) =>{
    response.json({ message: "Hello from server! this is kareem" })
}

module.exports ={
    view_home,
}