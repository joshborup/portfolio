const app = require('express')();
const bodyParser = require('body-parser');
const contact = require('./controller/contact')
require('dotenv').config();
app.use(bodyParser.json());


app.post('/api/contact', contact.message)

const port = 4000;
app.listen(port, ()=> console.log(`listening on ${port}`))