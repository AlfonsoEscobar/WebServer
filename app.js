const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

hbs.registerPartials( __dirname + '/views/partials/');
app.set('view engine', 'hbs');

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {

    res.render('home', {
        titulo: 'Curso de Node',
        nombre: 'Alfonso Escobar'
    });

});

app.get('/generic', (req, res) => {

    res.render('generic', {
        titulo: 'Curso de Node',
        nombre: 'Alfonso Escobar'
    });

});

app.get('/elements', (req, res) => {

    res.render('elements', {
        titulo: 'Curso de Node',
        nombre: 'Alfonso Escobar'
    });

});

app.listen(port, () =>{
    console.log(' Servidor corriendo en el puerto: ', port);
});