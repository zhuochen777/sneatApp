const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser")
const { PORT, mongoDBURL } = require("./config");
const box21Router_ana = require("./api/analytics/box21");
const box3Router_ana = require("./api/analytics/box3");
const box42Router_ana = require("./api/analytics/box42");
const box5Router_ana = require("./api/analytics/box5");
const box61Router_ana = require("./api/analytics/box61");
const rowsBrowserRouter_ana = require("./api/analytics/rowsBrowser");
const rowsOSRouter_ana = require("./api/analytics/rowsOS");
const rowsCountryRouter_ana = require("./api/analytics/rowsCountry");

const box21EcoRouter = require("./api/ecommerce/box21Eco");
const box22EcoRouter = require("./api/ecommerce/box22Eco");
const box32EcoRouter = require("./api/ecommerce/box32Eco");
const box41EcoRouter = require("./api/ecommerce/box41Eco");
const box5EcoRouter = require("./api/ecommerce/box5Eco");
const box6EcoRouter = require("./api/ecommerce/box6Eco");
const box73EcoRouter = require("./api/ecommerce/box73Eco");
const box8EcoRouter = require("./api/ecommerce/box8Eco");
const box9EcoRouter = require("./api/ecommerce/box9Eco");

const box1CrmRouter = require("./api/crm/box1Crm")
const box2CrmRouter = require("./api/crm/box2Crm")
const box31CrmRouter = require("./api/crm/box31Crm")
const box33CrmRouter = require("./api/crm/box33Crm")
const box5CrmRouter = require("./api/crm/box5Crm")
const box6CrmRouter = require("./api/crm/box6Crm")
const box9CrmRouter = require("./api/crm/rowsBox9Crm")
const box10CrmRouter = require("./api/crm/rowsBox10Crm")

const emailRouter = require("./api/email/emailRoutes")
const userRouter = require("./api/chat/userRoutes")
const userchatRouter = require("./api/chat/userchatRoutes")
const chatRouter = require("./api/chat/chatRoutes")
const authRouter = require("./api/auth/authRoutes")

const eventRouter = require("./api/calendar/eventRoutes")

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(box21Router_ana);
app.use(box3Router_ana);
app.use(box42Router_ana);
app.use(box5Router_ana);
app.use(box61Router_ana);
app.use(rowsBrowserRouter_ana);
app.use(rowsOSRouter_ana);
app.use(rowsCountryRouter_ana);

app.use(box21EcoRouter)
app.use(box22EcoRouter)
app.use(box32EcoRouter)
app.use(box41EcoRouter)
app.use(box5EcoRouter)
app.use(box6EcoRouter)
app.use(box73EcoRouter)
app.use(box8EcoRouter)
app.use(box9EcoRouter)

app.use(box1CrmRouter)
app.use(box2CrmRouter)
app.use(box31CrmRouter)
app.use(box33CrmRouter)
app.use(box5CrmRouter)
app.use(box6CrmRouter)
app.use(box9CrmRouter)
app.use(box10CrmRouter)

app.use(emailRouter)
app.use(userRouter)
app.use(userchatRouter)
app.use(chatRouter)
app.use(authRouter)

app.use(eventRouter)

app.get("/", async (req, res) => {
  return res.status(234).send("success");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connect to mongodb");
    app.listen(PORT, () => {
      console.log(`listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
