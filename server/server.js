const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();

dotenv.config( { path: './config.env'} );
const database= process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)
app.use(express.json());
mongoose.connect(database, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false,
    useCreateIndex : true
}).then(() => console.log('Data Connected Successfully'))

const movierouter = require('./Router/router');
app.use('/', movierouter);
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server Started')
});