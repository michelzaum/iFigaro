const express = require('express');
const mongoose = require('mongoose');
const conn = require('../config');

const app = express();

mongoose.connect(conn, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.get('/', (req, res) => {
    return res.json({ message: 'Teste de conexão' });
})

app.listen(3333);