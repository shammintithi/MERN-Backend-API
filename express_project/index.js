let express = require("express");

let app = express();
app.use(express.json()); //for parsing application/json


app.get("/", (req, res) => { //http://localhost:7000
  res.send({status:1, message: "Hello!"});
});

app.get("/about", (req, res) => { //http://localhost:7000/about
  res.send({status:1, message: "About me!"});
});

app.get("/food/:id", (req, res) => { //http://localhost:7000/food/1
  res.send({status:1, message: "Food page!" + foodId});
});


app.post("/login", (req, res) => { //http://localhost:7000/login
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


app.listen("7000")

