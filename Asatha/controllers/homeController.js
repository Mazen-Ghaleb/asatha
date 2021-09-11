// Requires and Imports

// home functions
const view_home = (request, response) =>{
    // test response, it works!
    // this response goes to react app.js it is fetched there.
    // then using some functions we could pass this response to the components.
    response.json({ message: "Hello from server! this is kareem" })
}

module.exports ={
    view_home,
}