const express = require('express');
const app = express();
const port = process.env.PORT | 3000;
const indexRoute = require('./routes/indexRouter');




app.use('/',indexRoute);

app.listen(port, () => console.log(`app listening on port ${port}!`));