const express = require('express')
const app = express();
const cors = require('cors');
const routes = require('./api/routes')
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/', routes);
app.get('*', function(req, res){
    res.status(404).send('That is not a valid endpoint.');
});

app.listen(PORT);
