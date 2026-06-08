let express = require('express');
let app = express();
var mongoose = require('mongoose');

const enquiryRoutes = require('./App/routes/web/enquiryRoutes');
require('dotenv').config();

 
app.use(express.json());
app.use("/web/api/enquiry", enquiryRoutes); //statics path


//http://localhost:3000/web/api/enquiry/


//Start the server after connecting to MongoDB  
mongoose.connect(process.env.DBURL).then(() => {
    console.log("Connected to MongoDB");
    
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port " + process.env.PORT);
    })
})

