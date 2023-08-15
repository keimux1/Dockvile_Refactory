const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000
const app = express();

app.engine("pug", require("pug").__express)
app.set("view engine", "pug");
app.set("veiws", path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"public")));

app.get ("/battery", (req, res) => {
    res.render("Battery purchase");
})





app.listen(port,()=>{
    console.log("Server is running on port "+port);
});