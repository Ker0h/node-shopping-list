const express = require('express');
const app = express();
const port = 8080;

app.use('/', express.static('assets'));
app.use('/', require('./shopping_routes/routes'));

app.set('view engine', 'ejs');

app.listen(process.env.PORT || port, () => {
    console.log(`Listening to port ${port}`);
});