const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

mongoose.connect('mongodb+srv://admin:m4rc3l@cluster0-zfums.mongodb.net/test?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);