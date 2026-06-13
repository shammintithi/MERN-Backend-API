let express = require('express');
let app = express();
let mongoose = require('mongoose');
require('dotenv').config();
const enquiryRouter = require('./App/routes/web/enquiryRoutes');
app.use(express.json());


//Routes
app.use('/api/website/enquiry', enquiryRouter);

mongoose.connect(process.env.DBURL).then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT || 7234, () => {
        console.log("Server is running");
    });
}).catch((err) => {
    console.log("Error connecting to database", err);
});