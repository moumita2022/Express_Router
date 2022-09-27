import express from "express";

let router = express.Router();

//http://localhost:3000/products/toys
router
  .route("/toys")
  .get((req, res) => {
    res.send("This is GET request and url is :3000/products/toys");
  })
  .post((req, res) => {
    res.send("This is POST request and url is :3000/products/toys");
  });

router
  .route("/toys/:toyId")
  .get((req, res) => {
    res.send(`This is a toy name : ${req.params.toyId},`);
  })
  .put((req, res) => {
    res.send(`This ${req.params.toyId} is updated`);
  })
  .delete((req, res) => {
    res.send(`This ${req.params.toyId} is deleted`);
  });

export default router;
