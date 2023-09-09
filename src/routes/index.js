const express = require('express');
const app = express();

const userRouter = require('./userRoute');

module.exports = async()=>{
    app.use('/login',userRouter);
    return app;
};
