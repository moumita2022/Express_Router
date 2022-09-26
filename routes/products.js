import express from "express";

let router= express.Router();

//http://localhost:5000/products/toys

router
.route("/toys")
.get((req, res)=>{
    res.send("This is GET request and url is products/toys")
})
.post((req, res)=> {
    res.send("This is POST request and url is products/toys")
})

router.route("/toys/:teddybear")
.get((req, res)=>{
    res.send(`This is a toy name : ${req.params.teddybear},`);
})
.put((req, res)=>{
    res.send(`This ${req.params.teddybear} is updated`);
})
.delete((req, res)=>{
    res.send(`This ${req.params.teddybear} is deleted`);
})


export default router;