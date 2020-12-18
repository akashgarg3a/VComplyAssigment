const express = require("express");
const app = express();
const port = 8000;
const userRouter = require('./router/userRouter');
const workFlowRouter = require('./router/workFlowRouter');
const db = require('./config/connection');
// 127.0.0.1:8000
//  node server
const http = require('http').createServer(app);
// socket server


// *********************listen***********************

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/workFlow", workFlowRouter);

http.listen(port, function (err) {
    if(err)
        console.log(err);
    else
        console.log("Server is listening to port " + port)
})