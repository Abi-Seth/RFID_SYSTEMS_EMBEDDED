const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8801;

require('./models/database.js');

app.use(cors());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '100mb' }));

const { transitionsRouter } = require('./routes/transitions.routes');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use("/public", express.static("public"));

app.use('/api/v1/transitions', transitionsRouter);

app.use('/', (req, res) => {
    return res.status(200).send({
        success: true,
        status: 200,
        message: 'RFID Systems API.'
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
})