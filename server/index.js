const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./api/routes/AuthRouter');
const MongoClient=require('mongodb').MongoClient;
require('dotenv').config();

const app = express();
app.use(cors());
var database;
// app.use(bodyParser.json({ limit: '30mb', extended: true }));
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// app.use(cors());

// // routers
// app.use('/auth', authRouter);

// app.get('/', (req, res) => res.send('welcome our app'));

// const CONNECTION_URL = "mongodb+srv://root:mongodb%23123@cluster0.bkzkjc6.mongodb.net/?retryWrites=true&w=majority";
// const PORT = process.env.PORT || 4000;

// mongoose
//   .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
//   )
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);


app.listen(4000,()=>{
  const PORT = process.env.PORT || 4000;
  MongoClient.connect('mongodb+srv://root:mongodb%23123@cluster0.bkzkjc6.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true},(error,result)=>{
    if(error) throw error
    database=result.db('test');
  console.log("database connection successful");
  })
})

app.get('/api/shops',(req,resp)=>{
  database.collection('shops').find({}).toArray((err,result)=>{
    if(err) throw err
     resp.send(result);
  })
})