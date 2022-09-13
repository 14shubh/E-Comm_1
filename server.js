const express = require('express');
const app = express();

const port = process.env.PORT | 3000;
const database = require('./config/database_connection')
const userRoute = require('./routes/userRoute');
const adminRoute = require('./routes/adminRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',userRoute);
app.use('/admin',adminRoute);

app.listen(port, () => console.log(`app listening on port ${port}!`));