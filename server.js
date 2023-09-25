const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv =  require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// accept data from client to server we need use body parse. so we need make use of middleware 
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);

});