// Requires and Imports

// home functions
const view_home = (request, response) =>{
    var customerInfo = {
        customer: [
        {
        "id": 3,
        "FName": "Mark",
        "LName": "Emad",
        "Birthday": "1999-12-31T22:00:00.000Z",
        "Gender": "Male"
    }
       ],
      };
    // test response, it works!
    // this response goes to react app.js it is fetched there.
    // then using some functions we could pass this response to the components.
    console.log(customerInfo.customer[0].id)
    let x = customerInfo.customer[0].id
    response.json({x})
}

module.exports ={
    view_home,
}