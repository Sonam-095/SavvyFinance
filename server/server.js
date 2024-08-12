require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authroute = require("./router/auth-router");
const contactroute = require("./router/contact-router");
const expenseroute = require("./router/expense-router");
const incomeroute = require("./router/income-router");
const budgetroute = require("./router/budget-router");
const savingroute = require("./router/saving-router");
const connectDb = require("./utils/db");
const errormiddleware = require("./middlewares/error-middleware");

const corsOptions = {
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authroute);
app.use("/api/contactform", contactroute);
app.use("/api/expense", expenseroute);
app.use("/api/income", incomeroute);
app.use("/api/budget", budgetroute);
app.use("/api/savings", savingroute);

app.use(errormiddleware);

const PORT = 5000;

connectDb().then(() => {
app.listen(PORT, () =>{
    console.log(`server is running at port: ${PORT}`);
});
});