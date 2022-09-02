const express = require('express');
const app = express();

const port = process.env.PORT | 3000;
const userRoute = require('./routes/userRoute');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',userRoute);

app.listen(port, () => console.log(`app listening on port ${port}!`));