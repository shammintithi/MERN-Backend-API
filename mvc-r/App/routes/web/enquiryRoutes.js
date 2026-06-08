let express = require('express');
const { enquiryInsert, enquirylist, enquiryDelete, enquiryUpdate } = require('../../controllers/web/userEnquiryController');

let enquiryRoutes = express.Router();

enquiryRoutes.post('/enquiry-insert', enquiryInsert);
enquiryRoutes.get("/enquiry-list", enquirylist);
enquiryRoutes.delete("/enquiry-delete/:id", enquiryDelete);
enquiryRoutes.put("/enquiry-update/:id", enquiryUpdate);

module.exports = enquiryRoutes;


    