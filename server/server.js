const express = require('express');
const server = express();
const articleRouter = require('./article/router');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.ATLAS_API, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection
connection.once('open', () => console.log("MongoDB connection established."));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use('/articles', articleRouter);

const PORT = process.env.port || 4000;
server.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));

