const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./api/routes');
const port = 8080;

dotenv.config();

const app = express();
const db = require('./api/util/postgres');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost'
}));
app.use('/', routes(db));

app.listen(port, () => console.log(`Express started on port ${port}`));