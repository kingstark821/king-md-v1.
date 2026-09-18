require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;
const code = require('./king/connection');

require('events').EventEmitter.defaultMaxListeners = 500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/code', code);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.listen(PORT, () => {
    console.log('========================================');
    console.log('        KING-MD-V1 — ONLINE');
    console.log('        Port: ' + PORT);
    console.log('        MADE IN BY KING STARK SENSEI');
    console.log('========================================');
});

module.exports = app;
