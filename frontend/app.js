const express = require("express");
const axios = require("axios");

const app = express();


// Use EJS template engine
app.set("view engine", "ejs");


// Read form data
app.use(express.urlencoded({ extended: true }));


// Static files
app.use(express.static("public"));


// Home route
app.get("/", (req, res) => {
    res.render("index");
});


// Submit form and send data to Flask backend
app.post("/submit", async (req, res) => {

    try {

        console.log("Form Data:", req.body);


        const response = await axios.post(
            "http://backend:5000/submit",
            req.body
        );


        res.send(response.data);


    } catch (error) {

        console.log(error.message);

        res.status(500).send(
            "Error connecting to Flask backend"
        );

    }

});


const PORT = 4000;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});