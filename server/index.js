const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const xhub = require('express-x-hub');
const contact = require('./controller/contact')
const path = require('path')
require('dotenv').config();

const app = express();

let root = path.join(__dirname, '..', 'build/')
app.use(express.static(root))
app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
})



app.use(xhub({ algorithm: 'sha1', secret: process.env.SECRET_TOKEN}));
app.use(bodyParser.json());
app.post('/api/contact', contact.message)



app.post('/portfolio_hook', (req, res) => {
  
  console.log(req.isXHub && req.isXHubValid())
  
  if(req.isXHub && req.isXHubValid()){
    exec('./test.sh', (err, stdout, stderr)=> {
        if(err){
            console.log(err)
        }else{
            console.log(stdout)
        }
    })
    console.log('success');
    res.json({ success: 'X-Hub Is Valid' });  
  } else {
    console.log('failed')
    res.status(400).json({ error: 'X-Hub Is Invalid' });
  }     
})

// app.use(express.static(`${__dirname}/../build`) );


// app.use('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// })




const port = 4000;
app.listen(port, ()=> console.log(`listening on ${port}`))
