const express = require('express')
const app = express();
const routes = require('./api/routes')
const PORT = process.env.PORT || 3000;
app.use('/', routes);
app.get('*', function(req, res){
    res.status(404).send('That is not a valid endpoint.');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
