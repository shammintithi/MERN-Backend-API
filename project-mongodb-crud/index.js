let express=require('express');
const dbConnection = require('./dbConnection');
const { ObjectId } = require("mongodb");
let app=express();

app.use(express.json());


//CRUD operations
//R-Read the data from database
app.get("/student-read", async (req,res)=>{
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students");
    let data = await studentCollection.find().toArray();

    let resObj = {
        status: 1,
        message: "Student List",
        data
    }


    res.send(resObj);
})

//C-Create the data in database 
app.post("/student-create", async (req,res)=>{
    let myDB = await dbConnection();

    let studentCollection = myDB.collection("students");

    // //1st method to insert data in mongodb collection
    // let obj = {
    //     name: req.body.name,
    //     email: req.body.email,
    //     num: req.body.num,
    // }
    // console.log(obj);

    // //2nd method to insert data in mongodb collection

    // let (name,email,num) = [req.body.name, req.body.email, req.body.num]

    //let obj = {name,email,num}
    //3rd method to insert data in mongodb collection
    let {name,email,num} = req.body;
    let obj = {name,email,num}


    let checkEmail = await studentCollection.findOne({email});

    if(checkEmail){
        let resObj = {
            status: 0,
            message: "Email already exists"
        }
        return res.send(resObj);
    }

    let insertRes= await studentCollection.insertOne(obj);


    let resObj = {
        status: 1,
        message: "Student created successfully",
        insertRes
    }
    
    res.send(resObj);
})


//D-Delete the data from database

//app.delete("/student-delete/:id?", (req,res)=>  //? means id is optional 

app.delete("/student-delete/:id", async (req,res)=>{
    
    let {id} = req.params;
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students");
    let deleteRes = await studentCollection.deleteOne({_id: new ObjectId(id)});

    let resObj = {
        status: 1,
        message: "Student deleted successfully",
        deleteRes
    }

    res.send(resObj);
})

//U-Update the data in database
app.put("/student-update/:id", async (req,res)=>{
    let {id} = req.params; //where to update
    let {name,email,num} = req.body; //what to update


    let obj = {} //data to update

    if(name !== "" && name !== undefined && name !== null){
        obj['name'] = name;
    }
    if(email !== "" && email !== undefined && email !== null){
        obj['email'] = email;
    }
    if(num !== "" && num !== undefined && num !== null){
        obj['num'] = num;
    }

    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students");    
    let updateRes = await studentCollection.updateOne({_id: new ObjectId(id)},{$set: obj});

    let resObj = {
        status: 1,
        message: "Student updated successfully",
        updateRes
    }

    res.send(resObj);
})


app.listen("7000")