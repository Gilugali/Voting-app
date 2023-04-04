const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;

const dbUri = 'mongodb+srv://justin:justin@nodetuts.m4vidin.mongodb.net/vote?retryWrites=true&w=majority'


//middleware
app.use('/html',express.static('html'));
app.use('/css', express.static('css'));
app.use('/img', express.static('img'))
app.use('/js', express.static('js'));

//rendering files 
app.get("/", (req,res) => {
 res.sendFile(path.join(__dirname, '/html/index.html'));

})



app.listen(port, ()=>{
  console.log("thee app is running");
});
