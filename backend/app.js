const express = require("express");
const cors = require("cors");
const uploadImage = require("./uploadImage.js");
const app = express();
const port = 6000;

app.use(cors());
app.use(express.json({limit : "25mb"}));
app.use(express.urlencoded({limit : "25mb"}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.post("/uploadImage", (req, res) =>{
    uploadImage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
