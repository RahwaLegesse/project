const express = require("express")
const data = require("./data")
const app = express()

app.get("/", (req, res)=>{
    res.send(data.products)
    console.log("Hi rahwa")
    
})

app.get("/product:id", (req, res)=>{
    const productId = req.params.id
    const product = data.products.find(x=>x_id===productId)
    if (product)
        res.send(product)
    else
    res.status(404).send({msg:'product not found'})
    
    
})
app.listen(5000, ()=>{
    console.log("running on the port of 5000 ...")
})