const enquiryModel = require('../../models/enquiry.model');

let  enquiryInsert =  (req, res) => { 

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
    
    

}


let enquirylist = async (req, res) => {

    let enquiryList = await enquiryModel.find();

    res.status(200).json({status:1, message: "Enquiry list fetched successfully", data: enquiryList});
}



let enquiryDelete = async (req, res) => {

    let enquiryId = req.params.id;

    let deletedEnquiry = await enquiryModel.deleteOne({_id: enquiryId});
    res.status(200).json({status:1, message: "Enquiry deleted successfully",id:enquiryId, delRes: deletedEnquiry});
}



let enquiryUpdate = async (req, res) => {
    let enquiryId = req.params.id;
    let {name, email, phone, message} = req.body;

    let updatedEnquiry = await enquiryModel.updateOne({_id: enquiryId}, {
        name: name,
        email: email, 
        phone: phone,
        message: message
    }); 
    res.status(200).json({status:1, message: "Enquiry updated successfully",id:enquiryId, updateRes: updatedEnquiry});
}

module.exports = {
    enquiryInsert,
    enquirylist,
    enquiryDelete,
    enquiryUpdate
}