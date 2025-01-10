const express = require('express')
const app = express()
const path = require('path')

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// inside public directory.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static('images'));

//middleware
app.use(express.urlencoded({ extended: true }))
const webRoutes = require('./routes/web');

app.use('/', webRoutes);
module.exports = app;