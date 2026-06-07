let express = require("express");
require("dotenv").config(); //for loading environment variables from .env file
const { checkToken } = require("./checkTokenMiddleware");

let app = express();
app.use(express.json()); //for parsing application/json

console.log("My token is: " + process.env.myToken);
console.log("My password is: " + process.env.myPass);

// let myPass = "1234"


//////MIDDLEWARE FUNCTION

//if the token is not provided in the request header, then the user will not be able to access any route or endpoint of the application.
// let checkToken = (req, res, next) => {
//     console.log("Checking token...");
//     if(req.query.token == "" || req.query.token == undefined){
//         return res.send(
//             {
//                 status:0, 
//                 message: "Token is required!"
//             }
//         )
//     }


// //if the token is provided in the request header, but is invalid.
//     if(req.query.token !== myToken){
//         return res.send(
//             {
//                 status:0, 
//                 message: "Invalid token!"
//             }
//         )
//     }

//     next(); //call the next middleware or route handler or callback function
// }

app.use(checkToken); //global middleware

app.use((req, res, next) => {
    if(req.query.pass == "" || req.query.pass == undefined){
        return res.send(
            {
                status:0, 
                message: "Give the Password!"
            }
        )

    }

    if(req.query.pass !== process.env.myPass){
        return res.send(
            {
                status:0, 
                message: "Invalid Password!"
            }
        )
    }

    next();
})

app.get("/", (req, res) => { //http://localhost:7000
  res.send({status:1, message: "Hello!"});
});

app.get("/about", (req, res) => { //http://localhost:7000/about
  res.send({status:1, message: "About me!"});
});

app.get("/food/:id", (req, res) => { //http://localhost:7000/food/1
  res.send({status:1, message: "Food page!" + foodId});
});


app.post("/login", checkToken, (req, res) => { //http://localhost:7000/login
  console.log(req);
  console.log(req.body);
  res.send(
    
    {status:1, 
    message: "Login successful!", 
    bodyData: req.body,
    queryData: req.query
  
  }

  );
});

app.post("/contact", (req, res) => { //http://localhost:7000/contact
    res.status(200).json (
    
    {status:1, 
    message: "Login successful!", 
    bodyData: req.body,
    queryData: req.query
  
  }

  );
});


app.listen(process.env.PORT, () =>{
    console.log("Server is running on port " + process.env.PORT);
}
)
