const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user_route');

const PORT = process.env.PORT || 3013;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/user',user);

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});