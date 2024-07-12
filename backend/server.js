const express = require("express")
const data = require("./data")
const app = express()

app.get("/product", (req, res)=>{
    res.send(data.products)
    
})
app.listen(5000, ()=>{
    console.log("running on the port of 5000 ...")
})