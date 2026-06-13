let express = require('express');
let enquiryRouter = express.Router();
const { enquiryInsert, enquirylist, enquiryDelete, enquiryUpdate} = require('../../controller/web/enquiryController');



enquiryRouter.post('/insert', enquiryInsert);
enquiryRouter.get('/list', enquirylist);
enquiryRouter.delete('/delete/:id', enquiryDelete);
enquiryRouter.put('/update/:id', enquiryUpdate);

module.exports = enquiryRouter;
