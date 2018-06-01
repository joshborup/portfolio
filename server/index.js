const express = require('express');

const bodyParser = require('body-parser');
const contact = require('./controller/contact')
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );
app.post('/api/contact', contact.message)

const path = require('path')
 app.get('*', (req, res)=>{
   res.sendFile(path.join(__dirname, '../build/index.html'));
 })



const port = 4000;
app.listen(port, ()=> console.log(`listening on ${port}`))
