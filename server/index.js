const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const exec = require('child_process').exec;
const xhub = require('express-x-hub');
const contact = require('./controller/contact')
require('dotenv').config();

const app = express();
app.use(xhub({ algorithm: 'sha1', secret: process.env.SECRET_TOKEN}));
app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );
app.post('/api/contact', contact.message)

app.post('/portfolio_hook', (req, res) => {
  
  console.log(req.isXHub && req.isXHubValid())

  if(req.isXHub && req.isXHubValid()){
      exec('./test.sh');
      console.log('success');
      res.json({ success: 'X-Hub Is Valid' });  
  } else {
      console.log('failed')
      res.status(400).json({ error: 'X-Hub Is Invalid' });
  }     
})

const path = require('path')
 app.get('*', (req, res)=>{
   res.sendFile(path.join(__dirname, '../build/index.html'));
 })



const port = 4000;
app.listen(port, ()=> console.log(`listening on ${port}`))
