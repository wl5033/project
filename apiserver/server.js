const express = require('express');
const app = express();

const userRouter = require('./routes/user');
const studentRouter = require('./routes/student')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, UPDATE, PUT');
    next();
})

app.use('/api/user',userRouter);
app.use('/api',studentRouter)

app.listen(8080);