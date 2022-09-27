import express from "express";
import toys from "./routes/products.js";

const app= express();

app.use(express.urlencoded({extended: true}));//middleware
app.use(express.json());//middleware

//routes
app.get("/", (req, res) => {
res.send("Hello Products!");
});

//GET http://localhost:3000/products
app.use("/products", toys);//middleware



app.listen(3000, () => console.log("Listening to the port 3000!"));



//What is req.params?

//request object is saving all the data which we get from frontend. Like inputfields, params, etc. normally we would use it. But now its just a simple example. Normally we would write a js logic inside instead of responding just a string. 

//for example you want to se all your orders on amazon. you click a button on amazon website to see all your past orders. This would be a get request to the backend. As respond the backend will send back a json with all the orders stored inside, to display it to the amazon customer .

//if you want to change data. like your password. you create a post request ( which is on frontend site funcionality of a button). you send the post request to backend with new data and you will overwrite the data in the backend to create a new password. 

//in this example you would use the req.body object to update your data in backend with it. 