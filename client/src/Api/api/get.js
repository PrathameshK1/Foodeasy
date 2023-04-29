const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./api/routes/AuthRouter');
const { default: ShopDetails } = require('../client/src/Components/Shop/ShopDetails/ShopDetails');
require('dotenv').config();
var collection='shops';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// routers
app.use('/auth', authRouter);

app.get('/', (req, res) => res.send('welcome our app'));

const CONNECTION_URL = "mongodb+srv://root:mongodb%23123@cluster0.bkzkjc6.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);
app.post('/shops/add',(req,res)=>{
  const shopDetail=req.body;

    console.log("Product Detail >>>>",shopDetail);
ShopDetails.create(ShopDetails,(err,data)=>{
  if(err){
    res.status(500).send(err,message);
    console.log(err);
  }
  else{
    res.status(201).send(data);
  }
});
});

app.get('/shops/get',(req,res)=>{
    collection.find((err,data)=>{
      if(err){
        res.status(500).send(err);
      }
      else{
        res.status(200).send(data);
      }
    });
});