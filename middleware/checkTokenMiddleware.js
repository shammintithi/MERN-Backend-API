
let checkToken = (req, res, next) => {
    console.log("Checking token...");
    if(req.query.token == "" || req.query.token == undefined){
        return res.send(
            {
                status:0, 
                message: "Token is required!"
            }
        )
    }


//if the token is provided in the request header, but is invalid.
    if(req.query.token !== process.env.myToken){
        return res.send(
            {
                status:0, 
                message: "Invalid token!"
            }
        )
    }

    next(); //call the next middleware or route handler or callback function
}
module.exports = {checkToken};