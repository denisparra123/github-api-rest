import express from 'express';
import * as bodyParser from 'body-parser';

import { GitController } from './controllers';

const app = express();
const port = process.env.PORT || 3000;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use('/git', GitController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});