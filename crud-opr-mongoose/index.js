let express = require('express');
let app = express();
var mongoose = require('mongoose');
let enquiryModel = require('./models/enquiry.model');
require('dotenv').config();

 
//Connect to MongoDB

app.use(express.json());
app.post('/api/enquiry-insert', (req, res) => { 

    let {name, email, phone, message} = req.body;
    console.log(name, email, phone, message);
    let enquiry = new enquiryModel({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
    enquiry.save().then(() => { 
        res.send({status:1, message: "Enquiry inserted successfully"});
        }).catch((err) => {
            res.send({status:0, message: "Error occurred while inserting enquiry",error: err});
        })
    
    

})


app.get("/api/enquiry-list", async (req, res) => {

    let enquiryList = await enquiryModel.find();

    res.status(200).json({status:1, message: "Enquiry list fetched successfully", data: enquiryList});
});

app.delete("/api/enquiry-delete/:id", async (req, res) => {

    let enquiryId = req.params.id;

    let deletedEnquiry = await enquiryModel.deleteOne({_id: enquiryId});
    res.status(200).json({status:1, message: "Enquiry deleted successfully",id:enquiryId, delRes: deletedEnquiry});
});


app.put("/api/enquiry-update/:id", async (req, res) => {
    let enquiryId = req.params.id;
    let {name, email, phone, message} = req.body;

    let updatedEnquiry = await enquiryModel.updateOne({_id: enquiryId}, {
        name: name,
        email: email, 
        phone: phone,
        message: message
    }); 
    res.status(200).json({status:1, message: "Enquiry updated successfully",id:enquiryId, updateRes: updatedEnquiry});
});

//Start the server after connecting to MongoDB  
mongoose.connect(process.env.DBURL).then(() => {
    console.log("Connected to MongoDB");
    
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port " + process.env.PORT);
    })
})