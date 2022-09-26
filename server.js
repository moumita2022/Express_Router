import express from "express";
import products from "./routes/products.js";

const app= express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
res.send("Hello Products!");
});

//GET http://localhost:3000/products

app.use("/products", products);


app.listen(3000, () => console.log("Listening to the port 3000!"));