require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const app = express();
const port = process.env.port || 3000;
const { dbConnect } = require('./config/mongo');


// App
app.get('/', (req, res) => {
  res.send('Hello World');
});

routerApi(app) ;

app.use(cors());
app.use(express.json());

dbConnect()
app.listen(port, () => {
    console.log('API lista por el puerto ', port)
})